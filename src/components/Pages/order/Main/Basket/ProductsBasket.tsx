import styled from 'styled-components';
import { ProductType } from '../../../../../lib/types';
import EmptyBasket from './EmptyBasket';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import HorizontalCard from './HorizontalCard';
import { formatPrice } from '../../../../../utils/maths';

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
        <HorizontalCard 
        {...product}
        price={formatPrice(product.price)}
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
    overflow-y: auto;
    gap: 20px;
    
    padding: 16px;
`;
