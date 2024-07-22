import styled from "styled-components"
import { theme } from "../../../../../theme";


export default function Admin() {
  return (
    <AdminStyled>
        <div className="TabsAdmin"> 
            <button>^</button>
            <button className="active">+ Ajouter un produit</button>
            <button>Modifier un produit</button></div>
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
    .TabsAdmin{
        height: 44px;
        display: flex;
        padding:  0 52px;

        button{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            position: relative;
            white-space: nowrap;
            text-decoration: none;
            background-color: ${ theme.colors.white };
            border: 1px solid ${ theme.colors.white };
            color: ${ theme.colors.greySemiDark};
            padding: 12px 26.31px 14px 23px;
            gap: 17px;
            border-radius: 5px 5px 0px 0px;
            border: 1px solid ${theme.colors.greyLight};

        }
        .active{
            background-color: ${ theme.colors.background_dark };
            border: 1px solid ${ theme.colors.background_dark };
            color: ${ theme.colors.white};
        }
    }
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
