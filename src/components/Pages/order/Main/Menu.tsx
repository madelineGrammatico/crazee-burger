// import { useState } from "react";
import styled from "styled-components"
import { theme } from "../../../../theme";
import { fakeMenu } from "../../../../fakeData/fakeMenu.ts"
import Card from "../../../reusables-ui/Card.tsx";
import { formatPrice } from "../../../../utils/maths.ts";

export default function Menu() {
    // const [menu, setmenu] = useState(fakeMenu2)
    const menu = fakeMenu.LARGE
  return (
    <MenuStyled>
        {menu.map(({id, imageSource, title, price}) => { 
            return <Card 
                key={id}
                imageSource={imageSource}
                title={title }
                leftDescription={formatPrice(price)}
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