import styled from 'styled-components';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';
import { useContext } from 'react';
import { BASKET_MESSAGE } from '../../../../../lib/constants';
import Loader from '../../../../reusables-ui/Loader';

export default function EmptyBasket() {
  const {isLoading} = useContext(OrderContext)
  return (
    <EmptyBasketStyled>
      { isLoading ? <Loader/> 
      : <span className="emptyMessage">{BASKET_MESSAGE.EMPTY}</span>
      }
    </EmptyBasketStyled>
  )
}
const EmptyBasketStyled = styled.div`
    flex: 1;
    
    overflow-y: scroll;
    scrollbar-width: none;
    height: 5070px;
    display: flex;
    justify-content: center;
    align-items: center;

    .emptyMessage {
        font-family: ${theme.fonts.family.stylish};
        color: ${theme.colors.greyBlue};
        font-size: ${theme.fonts.size.P4};
        font-weight: ${theme.fonts.weights.regular};
    }
`;
