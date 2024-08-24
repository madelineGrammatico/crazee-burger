import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Total from './Total';
import { calculateTotal, formatPrice } from '../../../../../utils/maths';
import Footer from './Footer';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import ProductsBasket from './ProductsBasket';
import EmptyBasket from './EmptyBasket';
import { isEmptyArray } from '../../../../../utils/array';

export default function Basket() {
  const { basket, menu } = useContext(OrderContext)
  const isbasketEmpty =  isEmptyArray(basket)
  const amondToPaid: number = calculateTotal(basket, menu)
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(amondToPaid)}/>
        { isbasketEmpty? <EmptyBasket/> : <ProductsBasket/> }
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

