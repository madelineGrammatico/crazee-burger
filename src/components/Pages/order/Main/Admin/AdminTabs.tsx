import React, { useContext} from 'react'
import styled from "styled-components"
import { theme } from "../../../../../theme";
import Tab from '../../../../reusables-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import OrderContext from '../../../../../context/OrderContext';

// type AdminTabs= {
//   isCollapsed: boolean, 
//   setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
// }

export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed, 
    isAddSelective, 
    setIsAddSelective, 
    isEditSelective, 
    setIsEditSelective
    } = useContext(OrderContext)
  

  const selectEditTab = () =>{
    setIsCollapsed(false)
    setIsEditSelective(true)
    setIsAddSelective(false)
  }

  const selectAddTab = () =>{
    setIsCollapsed(false)
    setIsAddSelective(true)
    setIsEditSelective(false)
  }

  const selectCollapseTab = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <AdminTabStyled className="TabsAdmin"> 
      <Tab 
        onClick={selectCollapseTab} 
        Icon={!isCollapsed ? FiChevronDown : FiChevronUp}
        className={isCollapsed ? "active" : ""}
      />
      <Tab 
        onClick={selectAddTab} 
        Icon={AiOutlinePlus}
        label="Ajouter un produit"
        value="addProduit"
        className={isAddSelective ? "active": ""}
      />
      <Tab 
        onClick={selectEditTab} 
        Icon={MdModeEditOutline}
        label="Modifier un produit"
        value="updateProduit"
        className={isEditSelective ? "active" : ""}
      />
    </AdminTabStyled>
  )
}

const AdminTabStyled = styled.div`
  height: 44px;
  display: flex;
  width: fit-content;
  gap: 1px;
 
  .active {
      background-color: ${ theme.colors.background_dark };
      border: 1px solid ${ theme.colors.background_dark };
      color: ${ theme.colors.white};
  } 
`;