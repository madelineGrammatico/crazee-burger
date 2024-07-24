import { useContext } from 'react'
import OrderContext from '../../../../../context/OrderContext'
import styled from "styled-components"
import { theme } from "../../../../../theme";

export default function AdminPanel() {
    const {
        selectTab,
        } = useContext(OrderContext)

  return (
    <AdminPanelStyled>
        {selectTab==="add" && <div className="PanelAdmin">ajouter un produit</div>}
        {selectTab==="edit" && <div className="PanelAdmin">modifier un produit</div>}
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
