import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"

export default function OrderPage() {
    const { userName } = useParams()
    const navigate = useNavigate()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate("/")
    }
  return (
    <OrderPageStyled>
      <div className="container">
        <nav>
          <h1>Bonjour { userName }</h1>  
          <button onClick={ handleClick }>Déconnection</button>
        </nav>
        <main></main>
      </div>
      
    </OrderPageStyled>  
  )
}
const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container{
    background-color: red;
    display: flex;
    height: 95vh;
    flex-direction: column;
    align-items: center;
    width: 1400px;
    nav{
    background-color: blue;
    }
    main{
      background-color: green;
      width:100%;
      flex: 1;
      
    }
  }
  
`;