import { useContext} from 'react'
import styled from "styled-components"
import { theme } from "../../../../../theme";
import Tab from '../../../../reusables-ui/Tab';
import OrderContext from '../../../../../context/OrderContext';
import { indexTabsConfig, tabConfigType } from '../../../../../lib/Types';
import { getClassName, getTabsConfig } from './getTabsConfig';

export default function AdminTabs() {
  const {
    isCollapsed, setIsCollapsed, 
    tabSelected, setTabSelected
  } = useContext(OrderContext)
  
  const handleSelectTab = (handleTabSelected: indexTabsConfig) => {
    if (handleTabSelected === "chevron") { 
      setIsCollapsed(!isCollapsed) 
      return }
    setIsCollapsed(false)
    setTabSelected(handleTabSelected)
  }

  const tabs= getTabsConfig(isCollapsed)

  return (
    <AdminTabStyled className="TabsAdmin"> 
      { tabs.map((tab: tabConfigType) =>
        <Tab 
          key= {tab.index}
          label= {tab.label}
          Icon= {tab.Icon}
          onClick= {() => handleSelectTab(tab.index)} 
          className= {getClassName(tab, tabSelected)}>
        </Tab>
      )}
    </AdminTabStyled>
  )
}

const AdminTabStyled = styled.div`
  height: 44px;
  display: flex;
  width: fit-content;
  gap: 1px;
  position: relative;
    left: 52px;
 
  .active {
      background-color: ${ theme.colors.background_dark };
      border: 1px solid ${ theme.colors.background_dark };
      color: ${ theme.colors.white};
  } 
`;