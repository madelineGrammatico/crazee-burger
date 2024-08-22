import styled from 'styled-components';
import EmptyBasket from './EmptyBasket';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import HorizontalCard from './HorizontalCard';
import { CheckIsProductClicked } from '../Menu/helper';
import { findProductById, isEmptyArray } from '../../../../../utils/array';

export default function ProductsBasket() {
  const { basket, handleDeleteInBasket, isAdmin, productSelected, menu} = useContext(OrderContext)

 const handleDelete = ( e: React.MouseEvent<HTMLButtonElement>, productToDelete: string) => {
  e.preventDefault();
  handleDeleteInBasket(productToDelete)
 }

  if(isEmptyArray(basket)) return <EmptyBasket/>
  return (
    <ProductBasketStyled>
      { basket.map((basketProduct)=> {
        const menuProduct = findProductById(menu, basketProduct.id)
        if (!menuProduct) return 
        return <HorizontalCard 
          {...menuProduct}
          quantity = {basketProduct.quantity}
          onDelete={(e)=>handleDelete(e, menuProduct.id)}
          $isClickable={isAdmin}
          $isSelected={CheckIsProductClicked(menuProduct.id, productSelected.id)}
          key={basketProduct.id}
        />
      })}
    </ProductBasketStyled>
  )
}
const ProductBasketStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column; 
    overflow-y: auto;
    gap: 20px;
    
    padding: 16px;
`;
