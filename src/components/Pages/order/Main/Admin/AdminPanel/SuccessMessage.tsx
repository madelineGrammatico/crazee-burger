import { theme } from "../../../../../../theme";
import styled from "styled-components"
import { FiCheckCircle } from "react-icons/fi";

export default function SuccessMessage() {
  return (
    <SuccessMessageStyled><FiCheckCircle/>Ajouté avec succès !</SuccessMessageStyled>
  )
}
const  SuccessMessageStyled = styled.span`
    color: ${theme.colors.success};
    display: flex;
    flex-flow: nowrap;
    justify-content:center;
    align-items: center;
    gap: 4px;
`;