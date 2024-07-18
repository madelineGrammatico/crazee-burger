import styled from 'styled-components'

import RightSideNav from './RightSideNav'
import Logo from '../../reusables-ui/Logo';
import { theme } from '../../../theme';

export default function NavBar({userName}: {userName: string}) {
   
    return (
    <NavBarStyled>
        <Logo/>
        <RightSideNav userName= {userName}/>
        
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
    
`