import React from 'react'
import styled from "styled-components"
import { theme } from "../../../../../theme";
import Tab from '../../../../reusables-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';

type AdminTabs= {
  isCollapsed: boolean, 
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AdminTabs({isCollapsed, setIsCollapsed}: AdminTabs) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(e.target)
    }
  return (
    <AdminTabStyled className="TabsAdmin"> 
        <Tab 
          onClick={()=> setIsCollapsed(!isCollapsed)} 
          Icon={isCollapsed ? FiChevronDown : FiChevronUp}
          className={!isCollapsed ? "collapsed-active" : ""}
        />
        <Tab 
          onClick={handleClick} 
          Icon={AiOutlinePlus}
          label="Ajouter un produit"
          value="addProduit"
          className={"active"}
        />
        <Tab 
          onClick={handleClick} 
          Icon={MdModeEditOutline}
          label="Modifier un produit"
          value="updateProduit"
        />
    </AdminTabStyled>
  )
}

const AdminTabStyled = styled.div`
  height: 44px;
  display: flex;
  width: fit-content;
 
  .active, .collapsed-active{
      background-color: ${ theme.colors.background_dark };
      border: 1px solid ${ theme.colors.background_dark };
      color: ${ theme.colors.white};
  } 
`;