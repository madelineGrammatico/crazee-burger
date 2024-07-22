import { useParams } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./NavBar/NavBar"
import Main from "./Main/Main"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"

export default function OrderPage() {
    const { userName } = useParams()
    const [isAdmin, setIsAdmin] = useState(false)

    const orderContextValue = {isAdmin, setIsAdmin}
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
      <div className="container">
        <NavBar userName= {userName}/>
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