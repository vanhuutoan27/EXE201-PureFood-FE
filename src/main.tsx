import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"

import App from "./App.tsx"
import { Toaster } from "./components/global/atoms/sonner.tsx"
import { AuthProvider } from "./contexts/auth-context.tsx"
import "./index.css"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
)
