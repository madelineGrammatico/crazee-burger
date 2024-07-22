import { createContext } from "react"

type OrderContextType = {
    isAdmin: boolean;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  }

const OrderContext = createContext<OrderContextType>({
    isAdmin: false,
    setIsAdmin: ()=> {}
})

export default OrderContext;