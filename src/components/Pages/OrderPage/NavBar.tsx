import styled from 'styled-components'

import RightSideNav from './RightSideNav'
import Logo from '../../reusables-ui/Logo';

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

    background-color: blue;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    
`;