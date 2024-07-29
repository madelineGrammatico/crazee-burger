
import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function EmptyMenuClient() {
    
    return (
        <EmptyMenuClientStyled>
            <h1>Victime de son succès ! :D</h1>
            <h2>De nouvelles recettes sont en cours de préparation.</h2>
            <p>À très vite !</p>
        </EmptyMenuClientStyled>
  )
}
const EmptyMenuClientStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Amatic SC", cursive;
    gap: 21px;

    h1{
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        font-weight:  ${theme.fonts.weights.bold};
        padding:0;
        margin:0;
    }
    h2{    
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
        line-height: 45.4px;
        padding:0;
        margin: 0;
        

    }
    p{  
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
        line-height: 45.4px;
        padding:0;
        margin:0;
    }
`;
