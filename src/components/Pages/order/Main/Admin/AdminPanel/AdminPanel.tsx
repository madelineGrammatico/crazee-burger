import { useContext } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import styled from "styled-components"
import { theme } from "../../../../../../theme";
import { getTabsConfig, getTabSelected } from '../getTabsConfig';
import { EMPTY_PRODUCT } from '../../../../../../lib/constants';

export default function AdminPanel() {
  const { isCollapsed, tabSelected, productSelected} = useContext(OrderContext)
  
  const hasClickedProduct = productSelected !== EMPTY_PRODUCT
  const tabs = getTabsConfig( isCollapsed, hasClickedProduct)
  const tabSelectedGetted = getTabSelected(tabs, tabSelected )
  return (
    <AdminPanelStyled>
      {tabSelectedGetted?.Content && <tabSelectedGetted.Content/> }
    </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
  flex: 1;
  height:240px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 31px 20px 31px 52px;


  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
