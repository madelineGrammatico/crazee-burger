import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./NavBar/NavBar"
import Main from "./Main/Main"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
    const [isAdmin, setIsAdmin] = useState(true)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [tabSelected, setTabSelected] = useState<"add" | "edit">("add")
    const [menu, setMenu] = useState( fakeMenu.SMALL)
    const handleDelete =(productId: number) => {
      !isAdmin ? navigate("/*") : null
      const menuCopy = [...menu]
      setMenu(menuCopy.filter((product) => product.id !== productId))
    }

    const orderContextValue = {
      isAdmin, setIsAdmin,
      isCollapsed, setIsCollapsed,
      tabSelected, setTabSelected,
      menu, setMenu,
      handleDelete
    }

    const navigate = useNavigate()
    

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