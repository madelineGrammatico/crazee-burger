import styled from "styled-components";
import Header from "../../../../reusables-ui/Header";
import { theme } from "../../../../../theme";

export default function Footer() {
  return (
    <Header>
      <FooterStyled>
        <span>Codé avec ❤️ et React.JS</span>
      </FooterStyled>
    </Header>
  )
}
const FooterStyled = styled.footer`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background_dark};
  position: sticky;
  bottom: 0;
  
  span {
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};
  }
`;