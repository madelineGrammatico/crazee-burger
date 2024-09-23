import Button from '../../../../reusables-ui/Button'
import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function EmptyMenuAdmin({onReset}: {onReset: ()=> void}) {
    return (
        <EmptyMenuAdminStyled>
            <h1>Le menu est vide ?</h1>
            <h2>Cliquez ci-dessous pour le réinitialiser</h2>
            <Button 
                onClick={()=> onReset()}
                label="Générer de nouveaux produits"
                size="large"
            />
        </EmptyMenuAdminStyled>
  )
}
const EmptyMenuAdminStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
    line-height: 45.4px;
    gap: 31px;
    h1{
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        line-height: 45.4px;
        font-weight:  ${theme.fonts.weights.bold};
        padding:0;
        margin:0;
    }
    h2{
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        line-height: 45.4px;
        font-weight: ${theme.fonts.weights.regular};
        padding:0;
        margin: 0;
    }
    button{
        width: fit-content;
    }
`;
