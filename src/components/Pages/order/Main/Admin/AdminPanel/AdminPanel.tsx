import { useContext } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import styled from "styled-components"
import { theme } from "../../../../../../theme";
import { getTabsConfig, getTabSelected } from '../getTabsConfig';

export default function AdminPanel() {
  const { isCollapsed, tabSelected} = useContext(OrderContext)
  
  const tabs = getTabsConfig( isCollapsed)
  const tabSelectedGetted = getTabSelected(tabs, tabSelected )
  return (
    <AdminPanelStyled>
      {tabSelectedGetted?.Content && <tabSelectedGetted.Content/> }
    </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
  flex: 1;
  height:250px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 31px 20px 49px 52px;


  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
