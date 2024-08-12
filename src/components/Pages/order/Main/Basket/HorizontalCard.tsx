
import styled from 'styled-components';
import { theme } from '../../../../../theme';
import { DEFAULT_IMAGE } from '../../../../../lib/constants';
import Button from '../../../../reusables-ui/Button';
import { IoTrashBin } from 'react-icons/io5';

export default function HorizontalCard({ 
  onDelete, 
  id,
  imageSource,
  title,
  price,
  quantity,
 }: {
    onDelete: (e: React.MouseEvent<HTMLButtonElement>)=> void
    id: string;
    imageSource: string;
    title: string;
    price: string;
    quantity: number;
    isAvailable?: boolean;
    isAdvertised?: boolean;
}) {
  return (
    <HorizontalCardStyled className='card--horizontal' key={id}>
      <img src={imageSource? imageSource : DEFAULT_IMAGE }/>
      <span className='title'>{title}</span>
      <span className="price">{price}</span>
      <span className="quantity-field">
        <span className="quantity">x {quantity}</span>
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
  height: 86px;
  background-color: ${theme.colors.white};
  position: relative;
  padding: 8px;
  display: grid;
  grid-template-columns: auto 3fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0 10px;
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
    line-height:32px;
    display:flex;
    justify-content: start; 
    align-items: center;
  }
  .price {
    grid-area: 2 / 2 / 3 / 3;
    display:flex;
    justify-content: start; 
    align-items: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.regular};
    line-height:20px;
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
      border-radius: 0 ${theme.borderRadius.round} 
                    ${theme.borderRadius.round} 0;
      
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
