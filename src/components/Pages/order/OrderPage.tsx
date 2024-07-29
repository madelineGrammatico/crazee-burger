import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./NavBar/NavBar"
import Main from "./Main/Main"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { useNavigate } from "react-router-dom";
import { EMPTY_PRODUCT } from "../../../lib/constants"
import { ProductType } from "../../../lib/Types"



export default function OrderPage() {
  const menuSelected = fakeMenu.LARGE
  const navigate = useNavigate()

  const [isAdmin, setIsAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [tabSelected, setTabSelected] = useState<"add" | "edit">("add")
  const [menu, setMenu] = useState( menuSelected)
  const [newProduct , setNewProduct] = useState(EMPTY_PRODUCT)
    
  const resetMenu = () => {
    setMenu(menuSelected)
  }
  const handleAdd = (newProduct: ProductType) => {
    const menuUpdated = [ newProduct,...menu, ]
    setMenu(menuUpdated)
  }

  const handleDelete =(productId: number) => {
    !isAdmin ? navigate("/*") : null
    const menuCopy = [...menu]
    setMenu(menuCopy.filter((product) => product.id !== productId))
  }

  const orderContextValue = {
    isAdmin, setIsAdmin,
    isCollapsed, setIsCollapsed,
    tabSelected, setTabSelected,
    newProduct , setNewProduct,
    menu,
    resetMenu,
    handleAdd,
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