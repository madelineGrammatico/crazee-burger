import styled from "styled-components"
import { theme } from "../../../../../theme/index.ts";
import Card from "../../../../reusables-ui/Card.tsx";
import { formatPrice } from "../../../../../utils/maths.ts";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.ts";
import EmptyMenuAdmin from "./EmptyMenuAdmin.tsx";
import EmptyMenuClient from "./EmptyMenuClient.tsx";

export default function Menu() {
    const { menu, isAdmin, handleDelete, productSelected, setProductSelected} = useContext(OrderContext)

    const handleClick = (idCardClicked: string) => {
        
        const productClicked = menu .find((product) => product.id === idCardClicked)
        productClicked && setProductSelected(productClicked)
    }
    const CheckIsProductClicked = (idproductClicked: string, idProductSelected: string) => {
        return idproductClicked === idProductSelected
    }

    if(menu.length === 0 && !isAdmin) return <EmptyMenuClient/>
    if(menu.length === 0) return <EmptyMenuAdmin/> 

  return (
    <MenuStyled>
        { menu.map(({ imageSource, title, price, id}) => { 
            return <Card 
                key={id}
                imageSource={imageSource}
                title={title }
                leftDescription={formatPrice(price)}
                isButtonDelete={isAdmin}
                onDelete={()=> handleDelete(id)}
                onClick={() => handleClick(id)}
                isHoverAble= {isAdmin}
                isSelected={CheckIsProductClicked(id, productSelected.id)}
            />
        })}
    </MenuStyled>
  )
}

const MenuStyled = styled.section`
    background-color: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;
`;