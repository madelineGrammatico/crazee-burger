import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./NavBar/NavBar"
import Main from "./Main/Main"
import { useRef, useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT, EMPTY_PRODUCT_DATA } from "../../../lib/constants"
import { tabSelectedType } from "../../../lib/types"
import { useMenu } from "../../../hooks/useMenu"

export default function OrderPage() {
  const menuSelected = fakeMenu.LARGE
  
  const titleEditRef = useRef<HTMLInputElement>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [tabSelected, setTabSelected] = useState<tabSelectedType>("add")
  const [newProduct , setNewProduct] = useState(EMPTY_PRODUCT_DATA)
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
  const {menu, resetMenu, handleAdd, handleDelete, handleEdit} =  useMenu(menuSelected )
  
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
    handleDelete,
    titleEditRef
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