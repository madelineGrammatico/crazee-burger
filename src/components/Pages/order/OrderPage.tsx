import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./NavBar/NavBar"
import Main from "./Main/Main"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { useNavigate } from "react-router-dom";
import { EMPTY_PRODUCT, EMPTY_PRODUCT_DATA } from "../../../lib/constants"
import { ProductType, tabSelectedType } from "../../../lib/types"
import { deepClone } from "../../../utils/array"



export default function OrderPage() {
  const menuSelected = fakeMenu.LARGE
  const navigate = useNavigate()

  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [tabSelected, setTabSelected] = useState<tabSelectedType>("add")
  const [menu, setMenu] = useState( menuSelected)
  const [newProduct , setNewProduct] = useState(EMPTY_PRODUCT_DATA)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
    
  const resetMenu = () => {
    setMenu(menuSelected)
  }
  const handleAdd = (newProduct: ProductType) => {
    const menuCopy = deepClone(menu)
    const menuUpdated = [ newProduct,...menuCopy]
    setMenu(menuUpdated)
  }
  const handleEdit = (productBeingUdated: ProductType) => { 
    
    const menuCopy = deepClone(menu)
    const indexOfPoductToEdit = menu.findIndex((product) => product.id === productBeingUdated.id)
    const menuUpdated = [...menuCopy]
    menuUpdated[indexOfPoductToEdit] = productBeingUdated
    setMenu(menuUpdated)
   }

  const handleDelete =(productId: string) => {
    !isAdmin ? navigate("/*") : null
    const menuCopy = deepClone(menu)
    setMenu(menuCopy.filter((product: ProductType) => product.id !== productId))
  }

  const orderContextValue = {
    isAdmin, setIsAdmin,
    isCollapsed, setIsCollapsed,
    tabSelected, setTabSelected,
    newProduct , setNewProduct,
    productSelected, setProductSelected,
    menu,
    resetMenu,
    handleAdd,
    handleEdit,
    handleDelete
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
      <div className="container">
        <NavBar/>
        <Main/>
      </div>
      
      </OrderPageStyled> 
    </OrderContext.Provider>
     
  )
}
const OrderPageStyled = styled.div`
  height:100vh;

  background-color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  .container{
    width: 1400px;
    height: 95vh;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
`;