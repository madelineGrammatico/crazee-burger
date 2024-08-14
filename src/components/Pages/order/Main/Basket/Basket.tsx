import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Total from './Total';
import { formatPrice } from '../../../../../utils/maths';
import Footer from './Footer';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import ProductsBasket from './ProductsBasket';
import EmptyBasket from './EmptyBasket';

export default function Basket() {
  const { basket } = useContext(OrderContext)
  const isbasketEmpty =  basket.length === 0 
  const amondToPaid: number = basket.reduce((total, product)=> {
    const currentValue = product.price * product.quantity
    return currentValue? total + currentValue : total
  }, 0)
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