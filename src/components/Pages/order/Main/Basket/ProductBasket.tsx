import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function ProductBasket() {
  return (
    <ProductBasketStyled>
        <span className="emptyMessage">Votre commande est vide.</span>
    </ProductBasketStyled>
  )
}
const ProductBasketStyled = styled.div`
    flex: 1;
    
    overflow-y: scroll;
    scrollbar-width: none;
    height: 5070px;

    .emptyMessage {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        font-family: ${theme.fonts.family.stylish};
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
    }
`;
