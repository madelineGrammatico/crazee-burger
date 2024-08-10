
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { ProductType } from '../../../../../lib/types';
import { DEFAULT_IMAGE } from '../../../../../lib/constants';
import Button from '../../../../reusables-ui/Button';
import { IoTrashBin } from 'react-icons/io5';

export default function HorizontalCard({product, onDelete}: {
    product: ProductType,
    onDelete: (e: React.MouseEvent<HTMLButtonElement>)=> void
}) {
  return (
    <HorizontalCardStyled className='card--horizontal' key={product.id}>
          <img src={product.imageSource? product.imageSource : DEFAULT_IMAGE }/>
          <span className='title'>{product.title}</span>
          <span className="price">{product.price}</span>
          <span className="quantity-field">
            <span className="quantity">x {product.quantity}</span>
            <Button 
              Icon={IoTrashBin}
              version="warning"
              size="full"
              className="delete" 
              onClick={onDelete}
            />
          </span>
     </HorizontalCardStyled>
  )
}
const HorizontalCardStyled = styled.div`
  
  background-color: ${theme.colors.white};
    position: relative;
      padding: 15px;
      display: grid;
      grid-template-columns: auto 3fr 1fr;
      grid-template-rows: auto auto;
      gap: 10px;
      border-radius: ${theme.borderRadius.round};
      box-sizing: border-box;
      overflow: hidden;
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
      .quantity-field {
        grid-area: 1 / 3 / 3 / 4;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.SM};
        font-weight: ${theme.fonts.weights.regular};
        width: 100%;
        height: 100%;

        .quantity {
            margin:0;
            padding:0;
          }
        .delete {
          display: none;
          
          
        }

        &:hover{
          .quantity {
            display: none;
          }
          .delete {
          display: inherit;
        }
        }
      }
`;
