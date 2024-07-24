import { useContext} from 'react'
import styled from "styled-components"
import { theme } from "../../../../../theme";
import Tab from '../../../../reusables-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminTabs() {
  const {
    isCollapsed, setIsCollapsed, 
    selectTab, setSelectTab
  } = useContext(OrderContext)
  
  const selectAddTab = () =>{
    setIsCollapsed(false)
    setSelectTab("add")
  }

  const selectEditTab = () =>{
    setIsCollapsed(false)
    setSelectTab("edit")
  }

  return (
    <AdminTabStyled className="TabsAdmin"> 
      <Tab 
        onClick={() => setIsCollapsed(!isCollapsed)} 
        Icon={!isCollapsed ? FiChevronDown : FiChevronUp}
        className={isCollapsed ? "active" : ""}
      />
      <Tab 
        onClick={selectAddTab} 
        Icon={AiOutlinePlus}
        label="Ajouter un produit"
        value="addProduit"
        className={selectTab==="add" ? "active": ""}
      />
      <Tab 
        onClick={selectEditTab} 
        Icon={MdModeEditOutline}
        label="Modifier un produit"
        value="updateProduit"
        className={selectTab==="edit"? "active" : ""}
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