import { createContext } from "react"

type OrderContextType = {
    isAdmin: boolean;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
    tabSelected: "add" | "edit";
    setTabSelected: React.Dispatch<React.SetStateAction<"add" | "edit">>
  }

const OrderContext = createContext<OrderContextType>({
    isAdmin: false,
    setIsAdmin: ()=> {},
    isCollapsed: false,
    setIsCollapsed: ()=> {},
    tabSelected: "add",
    setTabSelected: ()=> {},
})

export default OrderContext;