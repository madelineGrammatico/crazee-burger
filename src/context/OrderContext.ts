import { createContext } from "react"

export type ProductsType = {
  id: number,
  imageSource: string,
  title: string,
  price: number,
  quantity: number,
  isAvailable: boolean,
  isAdvertised: boolean,
}[]
type ProductType = {
  id: number,
  imageSource: string,
  title: string,
  price: number,
  quantity: number,
  isAvailable: boolean,
  isAdvertised: boolean,
}
type NewProductType = {
  title:string,
  imageSource:string,
  price: number
}

type OrderContextType = {
    isAdmin: boolean;
    setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
    tabSelected: "add" | "edit";
    setTabSelected: React.Dispatch<React.SetStateAction<"add" | "edit">>
    menu: ProductsType | [],
    newProduct: NewProductType, 
    setNewProduct: React.Dispatch<React.SetStateAction<NewProductType>>
    resetMenu: () => void
    handleAdd: (newProduct: ProductType) => void,
    handleDelete: (productId: number) => void,
    
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
    newProduct:{
      title:"",
      imageSource:"",
      price: 0
    }, 
    setNewProduct:() => {},
    resetMenu: () => {},
    handleAdd: () => {},
    handleDelete: () => {},
    
})

export default OrderContext;