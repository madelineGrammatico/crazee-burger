import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Total from './Total';
import { formatPrice } from '../../../../../utils/maths';
import Footer from './Footer';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import ProductsBasket from './ProductsBasket';
import EmptyBasket from './EmptyBasket';
import { findProductById, isEmptyArray } from '../../../../../utils/array';

export default function Basket() {
  const { basket, menu } = useContext(OrderContext)
  const isbasketEmpty =  isEmptyArray(basket)
  const amondToPaid: number = basket.reduce((total, basketProduct)=> {
    const menuProduct = findProductById(menu, basketProduct.id)
    const menuProductPrice = menuProduct? menuProduct.price : 0
    const currentValue = menuProductPrice * basketProduct.quantity
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