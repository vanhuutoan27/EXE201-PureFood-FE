import { useEffect } from "react"

function usePointerEvents(isDisabled: boolean) {
  useEffect(() => {
    if (isDisabled) {
      document.body.style.pointerEvents = "none"
    } else {
      document.body.style.pointerEvents = ""
    }

    return () => {
      document.body.style.pointerEvents = ""
    }
  }, [isDisabled])
}

export default usePointerEvents
