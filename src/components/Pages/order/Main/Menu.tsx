import { useState } from "react";
import styled from "styled-components"
import { theme } from "../../../../theme";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu.ts"
import Product from "./Product.tsx";
export default function Menu() {
    const [menu, setmenu] = useState(fakeMenu2)
  return (
    <MenuStyled>
        {menu.map((produit) => { 
            return <Product 
                imageSource={produit.imageSource}
                title={produit.title }
                price={produit.price}
            />
        })}
    </MenuStyled>
  )
}

const MenuStyled = styled.section`
    background-color: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;

`;