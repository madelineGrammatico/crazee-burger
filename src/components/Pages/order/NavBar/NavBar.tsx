import styled from 'styled-components'

import RightSideNav from './RightSideNav'
import Logo from '../../../reusables-ui/Logo';
import { theme } from '../../../../theme';
import { refreshPage } from '../../../../utils/windows';

export default function NavBar() {
   
    return (
    <NavBarStyled>
        <Logo className="logo-order-page" onClick={() => refreshPage()}/>
        <RightSideNav/>
        
    </NavBarStyled>
  )
}
const NavBarStyled = styled.nav`
    height: 10vh;
    align-self: stretch;

    background-color: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    border-radius:  ${theme.borderRadius.extraRound} 
                    ${theme.borderRadius.extraRound} 
                    0 0 ;
    border-bottom: 1px solid ${theme.colors.greyLight};
    .logo-order-page{
        cursor: pointer;
    }
`