import { useState } from "react"

export const useSuccesMessage = (timeDelay = 2000) => {
    const [isSubmited, setIsSubmited] = useState(false)

    const displaySuccesMessage = () => { 
      setIsSubmited(true)
      setTimeout(()=>{
        setIsSubmited(false)
      }, timeDelay)
    }

    return {isSubmited, displaySuccesMessage  }
  }