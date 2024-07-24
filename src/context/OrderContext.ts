import { createContext } from "react"

type OrderContextType = {
    isAdmin: boolean;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
    isAddSelective: boolean;
    setIsAddSelective: React.Dispatch<React.SetStateAction<boolean>>
    isEditSelective: boolean;
    setIsEditSelective: React.Dispatch<React.SetStateAction<boolean>>
  }

const OrderContext = createContext<OrderContextType>({
    isAdmin: false,
    setIsAdmin: ()=> {},
    isCollapsed: false,
    setIsCollapsed: ()=> {},
    isAddSelective: false,
    setIsAddSelective: ()=> {},
    isEditSelective: false,
    setIsEditSelective: ()=> {},
})

export default OrderContext;