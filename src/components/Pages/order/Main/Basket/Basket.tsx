import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Total from './Total';
import { formatPrice } from '../../../../../utils/maths';
import Footer from './Footer';

export default function Basket() {
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)}/>
        <div className="body">body</div>
        <Footer/>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadows.insetMedium};


  .body {
    flex: 1;
    
    overflow-y: scroll;
    scrollbar-width: none;
    height: 5070px;
    

  }
  .footer {
    
  }
`;