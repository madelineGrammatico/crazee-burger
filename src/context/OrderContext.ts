import { createContext } from "react"

type OrderContextType = {
    isAdmin: boolean;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
    selectTab: "add" | "edit";
    setSelectTab: React.Dispatch<React.SetStateAction<"add" | "edit">>
  }

const OrderContext = createContext<OrderContextType>({
    isAdmin: false,
    setIsAdmin: ()=> {},
    isCollapsed: false,
    setIsCollapsed: ()=> {},
    selectTab: "add",
    setSelectTab: ()=> {},
})

export default OrderContext;