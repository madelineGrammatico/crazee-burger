import styled from 'styled-components';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';

export default function EmptyBasket() {
  const {isLoading} = useContext(OrderContext)
  const basketEmptyMessage= "Votre commande est vide."
  const basketLoadingMessage = "Chargement..."
  return (
    <EmptyBasketStyled>
        <span className="emptyMessage">{isLoading? basketLoadingMessage: basketEmptyMessage}</span>
    </EmptyBasketStyled>
  )
}
const EmptyBasketStyled = styled.div`
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
