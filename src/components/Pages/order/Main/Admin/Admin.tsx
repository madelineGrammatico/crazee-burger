import styled from "styled-components"
import AdminTabs from "./AdminTabs";
import { useContext } from 'react'
import AdminPanel from "./AdminPanel";
import OrderContext from "../../../../../context/OrderContext";

export default function Admin() {
  const {
    isCollapsed,
    } = useContext(OrderContext)

  return (
    <AdminStyled>
      <AdminTabs />
      { !isCollapsed && <AdminPanel/> }
    </AdminStyled>
  )
}
const AdminStyled = styled.section`
  position: absolute;
  width: 100%;
  height: 294px;
  left:0;
  bottom: 0%;
  right:0;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
