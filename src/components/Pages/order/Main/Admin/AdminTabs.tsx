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
    tabSelected, setTabSelected
  } = useContext(OrderContext)
  
  const handleSelectTab = (handleTabSelected: "add" | "edit") =>{
    setIsCollapsed(false)
    setTabSelected(handleTabSelected)
  }

  return (
    <AdminTabStyled className="TabsAdmin"> 
      <Tab 
        onClick={() => setIsCollapsed(!isCollapsed)} 
        Icon={!isCollapsed ? FiChevronDown : FiChevronUp}
        className={isCollapsed ? "active" : ""}
      />
      <Tab 
        onClick={()=> handleSelectTab("add")} 
        Icon={AiOutlinePlus}
        label="Ajouter un produit"
        className={tabSelected==="add" ? "active": ""}
      />
      <Tab 
        onClick={()=> handleSelectTab("edit")} 
        Icon={MdModeEditOutline}
        label="Modifier un produit"
        className={tabSelected==="edit"? "active" : ""}
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