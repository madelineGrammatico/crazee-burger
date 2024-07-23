import styled from "styled-components"
import { theme } from "../../../../../theme";
import AdminTabs from "./AdminTabs";


export default function Admin() {
  return (
    <AdminStyled>
        <AdminTabs/>
        <div className="PanelAdmin">panel admin</div>
    </AdminStyled>
  )
}
const AdminStyled = styled.section`
    position: absolute;
    width: 100%;
    height: 250px;
    left:0;
    bottom: 0%;
    right:0;
    display: flex;
    flex-direction: column;
    
    .PanelAdmin{
        flex: 1;

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 31px;

        background: ${theme.colors.white};
        border-top: 1px solid ${theme.colors.greyLight};
        box-shadow: ${theme.shadows.subtle};

    }
`;
