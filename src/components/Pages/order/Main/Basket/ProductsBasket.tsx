import styled from 'styled-components';
import { ProductType } from '../../../../../lib/types';
import EmptyBasket from './EmptyBasket';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import CardVertical from './CardVertical';

export default function ProductsBasket() {
  const { basket, handleDeleteInBasket } = useContext(OrderContext)

 const handleDelete = ( e: React.MouseEvent<HTMLButtonElement>, productToDelete: string) => {
  e.preventDefault();
  handleDeleteInBasket(productToDelete)
 }

  if(basket.length === 0) return <EmptyBasket/>
  return (
    <ProductBasketStyled>
      { basket.map((product: ProductType)=> 
        <CardVertical 
        product={product}
        onDelete={(e)=>handleDelete(e, product.id)}
        key={product.id}
      />
      )}
    </ProductBasketStyled>
  )
}
const ProductBasketStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column; 
    gap: 20px;
    overflow-y: scroll;
    padding: 16px;
`;
