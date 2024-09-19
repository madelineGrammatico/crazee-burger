import styled from "styled-components";
import { theme } from "../../theme";
import { LOADER_MESSAGE } from "../../lib/constants";

export default function Loader() {
  return (
    <LoaderStyled>{LOADER_MESSAGE}</LoaderStyled>
  )
}
const LoaderStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding:0;
    margin:0;

    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.regular};
    line-height: 45.4px;
    
`;