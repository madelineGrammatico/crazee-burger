import { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import styled from "styled-components"
import { theme } from "../../../../../theme";
import { getTabsConfig, getTabSelected } from './getTabsConfig';

export default function AdminPanel() {
  const { isCollapsed, tabSelected} = useContext(OrderContext)
  
  const tabs = getTabsConfig( isCollapsed)
  const tabSelectedGetted = getTabSelected(tabs, tabSelected )
  return (
    <AdminPanelStyled>
      <div>{tabSelectedGetted?.label}</div>
    </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 31px;

  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
