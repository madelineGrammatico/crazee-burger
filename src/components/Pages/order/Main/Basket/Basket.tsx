import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Total from './Total';
import { formatPrice } from '../../../../../utils/maths';
import Footer from './Footer';
import ProductBasket from './ProductBasket';

export default function Basket() {
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)}/>
        <ProductBasket/>
        <Footer/>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.insetMedium};

`;