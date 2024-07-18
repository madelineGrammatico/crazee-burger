import styled from 'styled-components'

import RightSideNav from './RightSideNav'

export default function NavBar({userName}: {userName: string}) {
   
    return (
    <NavBarStyled>
        <div className="left-Side">left</div>
        <RightSideNav userName= {userName}/>
        
    </NavBarStyled>
  )
}
const NavBarStyled = styled.nav`
    width:100%;
    height: 10vh;

    background-color: blue;
    display: flex;
    justify-content: space-between;

    .left-Side{
        background-color: purple;
    }
    
`;