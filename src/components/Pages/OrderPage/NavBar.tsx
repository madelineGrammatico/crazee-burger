import React from 'react'
import { useNavigate} from "react-router-dom"
import styled from 'styled-components'

export default function NavBar({userName}: {userName: string}) {
    const navigate = useNavigate()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate("/")
    }
    return (
    <NavBarStyled>
        <h1>Bonjour { userName }</h1>  
        <button onClick={ handleClick }>Déconnection</button>
    </NavBarStyled>
  )
}
const NavBarStyled = styled.nav`
    width:100%;
    height: 10vh;

    background-color: blue;
    display: flex;
`;