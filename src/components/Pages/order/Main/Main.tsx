import styled from "styled-components"
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">basket</div>
      <Menu/>
    </MainStyled>
  )
}
const MainStyled = styled.div`
    width:100%;

    background-color: ${theme.colors.background_white};
    flex: 1;
    border-radius:  0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: 25% 1fr;

    .basket{
      background-color: pink;
    }
    .menu{
      
    }
`
