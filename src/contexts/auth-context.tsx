import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react"

import Loading from "@/pages/Loading"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

import { UserType } from "@/schemas/userSchema"

import pureAPI from "@/lib/pureAPI"

interface AuthContextProps {
  user: UserType | null
  setUser: (value: UserType | null) => void
  login: (
    accessToken: string,
    refreshToken: string,
    expiredAt: Date
  ) => Promise<void>
  logout: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "accessToken",
    "refreshToken",
    "expiredAt"
  ])
  const [user, setUser] = useState<UserType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const accessToken = cookies.accessToken

    if (accessToken) {
      const getAuthUser = async () => {
        try {
          const response = await pureAPI.get(`/auth/me`)
          const { data } = response.data
          setUser(data)
        } catch (error) {
          setUser(null)
        } finally {
          setIsLoading(false)
        }
      }
      getAuthUser()
    } else {
      setIsLoading(false)
    }
  }, [cookies.accessToken])

  const login = async (
    accessToken: string,
    refreshToken: string,
    expiredAt: Date
  ) => {
    setCookie("accessToken", accessToken, { path: "/" })
    setCookie("refreshToken", refreshToken, { path: "/" })
    setCookie("expiredAt", expiredAt, { path: "/" })

    try {
      const response = await pureAPI.get(`/auth/me`)
      const { data } = response.data
      setUser(data)
    } catch (error) {
      setUser(null)
    }
  }

  const logout = () => {
    removeCookie("accessToken", { path: "/" })
    removeCookie("refreshToken", { path: "/" })
    setUser(null)
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}
