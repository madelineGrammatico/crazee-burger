import { useContext} from 'react'
import styled from "styled-components"
import { theme } from "../../../../../theme";
import Tab from '../../../../reusables-ui/Tab';
import OrderContext from '../../../../../context/OrderContext';
import { tabType, getTabsConfig, indexTabsConfig } from './getTabsConfig';

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

  const tabs= getTabsConfig(  isCollapsed, tabSelected)

  return (
    <AdminTabStyled className="TabsAdmin"> 
      { tabs.map((tab: tabType) =>
        <Tab 
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick= {() => handleSelectTab(tab.index)} 
          className={tab.className}>
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
 
  .active {
      background-color: ${ theme.colors.background_dark };
      border: 1px solid ${ theme.colors.background_dark };
      color: ${ theme.colors.white};
  } 
`;