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
import { isEmptyArray } from "../../../../../utils/array.ts";
import { useNavigate } from "react-router-dom";

export default function Menu() {
    const navigate = useNavigate()
    const { 
        username,
        menu,
        resetMenu,
        isModeAdmin,
        handleDelete,
        productSelected, setProductSelected,
        handleProductSelected,
        handleAddTobasket,
        handleDeleteInBasket
    } = useContext(OrderContext)
    
    const handleCardDelete = (e: React.MouseEvent<Element>, id: string) => {
        e.stopPropagation()
        handleDelete(id, username)
        productSelected.id === id && setProductSelected(EMPTY_PRODUCT)
        handleDeleteInBasket(id, username)
    }

    const handleClickButton = (e: React.MouseEvent<Element>, idCardClicked: string) => {
        e.stopPropagation()
        handleAddTobasket(idCardClicked, username)
    }

    try {
        if(!username) throw("any username")
        if(isEmptyArray(menu) && !isModeAdmin) return <EmptyMenuClient/>
        if(isEmptyArray(menu)) return <EmptyMenuAdmin onReset={() => resetMenu(username)}/> 
    } catch(e) {
        navigate("/*")
        console.error(e)
    }

    return (
        <MenuStyled>
            { menu.map(({ imageSource, title, price, id}) => { 
                return <Card 
                    key={id}
                    imageSource={imageSource}
                    title={title }
                    leftDescription={formatPrice(price)}
                    isButtonDelete={isModeAdmin}
                    onDelete={(e)=> handleCardDelete(e, id)}
                    onClick= {isModeAdmin? () =>  handleProductSelected(id) : ()=> {}}
                    onAdd={(e) => handleClickButton(e, id)}
                    isHoverAble= {isModeAdmin}
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