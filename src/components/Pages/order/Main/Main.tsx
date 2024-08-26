import styled from "styled-components"
import { theme } from "../../../../theme";
import Menu from "./Menu/Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import Basket from "./Basket/Basket";

export default function Main() {
  const {isModeAdmin} =useContext(OrderContext)
  
  return (
    <MainStyled>
      <Basket/>
      <div className="menu-and-admin">
        <Menu/>
        {isModeAdmin && <Admin/>}
      </div>
    </MainStyled>
  )
}
const MainStyled = styled.div`
    width:100%;

    background-color: ${theme.colors.background_white};
    height: calc(95vh - 10vh);
    border-radius:  0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: 25% 1fr;
    overflow: hidden;
    
    .menu-and-admin {
      position: relative;
      overflow-y: hidden;
      display: grid;
    }
`
