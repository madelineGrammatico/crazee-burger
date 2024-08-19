import styled from 'styled-components';
import { ProductType } from '../../../../../lib/types';
import EmptyBasket from './EmptyBasket';
import { useContext } from 'react';
import OrderContext from '../../../../../context/OrderContext';
import HorizontalCard from './HorizontalCard';
import { formatPrice } from '../../../../../utils/maths';
import { CheckIsProductClicked } from '../Menu/helper';
import { isEmptyArray } from '../../../../../utils/array';

export default function ProductsBasket() {
  const { basket, handleDeleteInBasket, isAdmin, productSelected} = useContext(OrderContext)

 const handleDelete = ( e: React.MouseEvent<HTMLButtonElement>, productToDelete: string) => {
  e.preventDefault();
  handleDeleteInBasket(productToDelete)
 }

  if(isEmptyArray(basket)) return <EmptyBasket/>
  return (
    <ProductBasketStyled>
      { basket.map((product: ProductType)=> 
        <HorizontalCard 
        {...product}
        price={formatPrice(product.price)}
        onDelete={(e)=>handleDelete(e, product.id)}
        $isHoverAble={isAdmin}
        $isSelected={CheckIsProductClicked(product.id, productSelected.id)}
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
