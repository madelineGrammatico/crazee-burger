import styled from "styled-components"
import { theme } from "../../../../../theme/index.ts";
import Card from "../../../../reusables-ui/Card.tsx";
import { formatPrice } from "../../../../../utils/maths.ts";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.ts";
import EmptyMenuAdmin from "./EmptyMenuAdmin.tsx";
import EmptyMenuClient from "./EmptyMenuClient.tsx";
import { CheckIsProductClicked } from "./helper.ts";
import { EMPTY_PRODUCT } from "../../../../../lib/constants.ts";
import { findProductIn } from "../../../../../utils/array.ts";

export default function Menu() {
    const { menu,
            isAdmin,
            handleDelete,
            productSelected, setProductSelected,
             setIsCollapsed,
            setTabSelected,
            titleEditRef, handleAddTobasket,
            handleDeleteInBasket
        } = useContext(OrderContext)

    const handleClick = async (idCardClicked: string) => {
        if (!isAdmin)  return 
        const productClicked = findProductIn(menu, idCardClicked)
        productClicked &&  await setProductSelected(productClicked)
        await setIsCollapsed(false)
        await setTabSelected("edit")
        titleEditRef.current && titleEditRef.current.focus()
    }
    const handleCardDelete = (e: React.MouseEvent<Element>, id: string) => {
        e.stopPropagation()
        handleDelete(id)
        productSelected.id === id && setProductSelected(EMPTY_PRODUCT)
        handleDeleteInBasket(id)
    }
    const handleClickButton = (e: React.MouseEvent<Element>, idCardClicked: string) => {
        e.stopPropagation()
        const productClicked = findProductIn(menu, idCardClicked)
        productClicked && handleAddTobasket(productClicked)
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
                onDelete={(e)=> handleCardDelete(e, id)}
                onClick={() => handleClick(id)}
                onAdd={(e) => handleClickButton(e, id)}
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
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;
    scrollbar-width: none;
`;