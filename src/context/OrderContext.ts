import { createContext } from "react"
import { OrderContextType } from "../lib/types";


const OrderContext = createContext<OrderContextType>({
    isAdmin: false,
    setIsAdmin: ()=> {},
    isCollapsed: false,
    setIsCollapsed: ()=> {},
    tabSelected: "add",
    setTabSelected: ()=> {},
    menu: [{
      id: "9",
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
    productSelected: {
      id: "9",
      title:"",
      imageSource:"",
      price: 0,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    },
     setProductSelected: () => {},
     handleEdit: () => {},
     titleEditRef: { current: null } 
})

export default OrderContext;