import styled from "styled-components"
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">basket</div> */}
      <div className="menu-and-admin">
        <Menu/>
        <Admin/>
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
    grid-template-columns: 1fr;
    /* grid-template-columns: 25% 1fr; // for basket */
    overflow: hidden;
    
    .basket{
      background-color: pink;
    }
    .menu-and-admin {
      position: relative;
      overflow-y: hidden;
      display: grid;
    }
`
