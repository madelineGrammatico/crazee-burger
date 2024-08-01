import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

export default function HintMessage() {
  return (
    <HintMessageStyled>
        <span>Cliquer sur un produit pour le modifier</span>
        <HiCursorClick/>
    </HintMessageStyled>
  )
}
const HintMessageStyled = styled.div`
    height:100%;
    width:100%;

    display:flex;
    align-items: center;
    gap:10px

    font-family: ${theme.fonts.family.stylish};
    font-size: ${theme.fonts.size.P3};
    color: ${theme.colors.greyBlue}
`;
