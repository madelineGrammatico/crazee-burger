import { createContext } from "react"

type ProductsType = {
  id: number,
  imageSource: string,
  title: string,
  price: number,
  quantity: number,
  isAvailable: boolean,
  isAdvertised: boolean,
}[]

type OrderContextType = {
    isAdmin: boolean;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
    tabSelected: "add" | "edit";
    setTabSelected: React.Dispatch<React.SetStateAction<"add" | "edit">>
    menu: ProductsType,
    setMenu: React.Dispatch<React.SetStateAction<ProductsType>>
  }

const OrderContext = createContext<OrderContextType>({
    isAdmin: false,
    setIsAdmin: ()=> {},
    isCollapsed: false,
    setIsCollapsed: ()=> {},
    tabSelected: "add",
    setTabSelected: ()=> {},
    menu: [{
      id: 9,
      imageSource: "/images/wedges1.png",
      title: "Crispy Potatoes",
      price: 3.7,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    }], 
    setMenu: () => {}
})

export default OrderContext;