import styled from "styled-components";
import { theme } from "../../theme";

export default function Header({children}: {children: JSX.Element | string}) {
  return (
    <HeaderStyled>{children}</HeaderStyled>
  )
}
const HeaderStyled = styled.div`
  height: 70px;
  padding: 0 16px;
  background-color: ${theme.colors.background_dark};
`;