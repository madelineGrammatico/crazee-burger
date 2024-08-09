
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { ProductType } from '../../../../../lib/types';
import { DEFAULT_IMAGE } from '../../../../../lib/constants';

export default function CardVertical({product, onDelete}: {
    product: ProductType,
    onDelete: (e: React.MouseEvent<HTMLButtonElement>)=> void
}) {
  return (
    <CardVerticalStyled className='card--horizontal' key={product.id}>
          <img src={product.imageSource? product.imageSource : DEFAULT_IMAGE }/>
          <span className='title'>{product.title}</span>
          <span className="price">{product.price}</span>
          <span className="quantity-field">
            <span className="quantity">x {product.quantity}</span>
            <button className="delete" onClick={onDelete}>sup</button>
          </span>
     </CardVerticalStyled>
  )
}
const CardVerticalStyled = styled.div`
  
  background-color: ${theme.colors.white};
      padding: 15px;
      display: grid;
      grid-template-columns: auto 2fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
      border-radius: ${theme.borderRadius.round};
      box-sizing: border-box;
      img {
        height: 70px;
        width: 86px;
        object-fit: contain;
        grid-area: 1 / 1 / 3 / 2;
      }
      .title {
        grid-area: 1 / 2 / 2 / 3;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: ${theme.fonts.family.stylish};
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.size.P3};
        font-weight: ${theme.fonts.weights.bold};
      }
      .price {
        grid-area: 2 / 2 / 3 / 3;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.regular};
      }
      .quantity {
        grid-area: 1 / 3 / 3 / 4;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.regular};
      }
`;
