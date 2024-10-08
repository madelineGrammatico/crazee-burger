import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Total from './Total';
import Footer from './Footer';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import ProductsBasket from './ProductsBasket';
import EmptyBasket from './EmptyBasket';
import { isEmptyArray } from '../../../../../utils/array';

export default function Basket() {
  const { basket} = useContext(OrderContext)
  
  return (
    <BasketStyled>
        <Total />
        { isEmptyArray(basket)? <EmptyBasket/> : <ProductsBasket/> }
        <Footer/>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.insetMedium};
  overflow: hidden;
`;

