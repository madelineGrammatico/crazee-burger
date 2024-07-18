import { useParams } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import NavBar from "./NavBar"
import Main from "./main"

export default function OrderPage() {
    const { userName } = useParams()
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar userName= {userName}/>
        <Main/>
      </div>
      
    </OrderPageStyled>  
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

    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
`;