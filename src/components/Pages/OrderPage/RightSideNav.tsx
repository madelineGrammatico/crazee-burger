import React from 'react'
import { useNavigate} from "react-router-dom"
import styled from 'styled-components'

export default function RightSideNav({userName}) {
    const navigate = useNavigate()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate("/")
    }
    return (
    <RightSideNavStyled>
        <h1>Bonjour { userName }</h1>  
        <button onClick={ handleClick }>Déconnection</button>
        </RightSideNavStyled>
  )
}
const RightSideNavStyled = styled.div`
  background-color: purple;
  display: flex;
`;