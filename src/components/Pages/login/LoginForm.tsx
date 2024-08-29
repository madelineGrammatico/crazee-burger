import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import TextInput from '../../reusables-ui/TextInput'
import Button from '../../reusables-ui/Button'
import { theme } from '../../../theme'
import { BsPersonCircle } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'
import { authenticateUser} from '../../../api/user'


export default function LoginForm() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
        await authenticateUser(username)
        setUsername('')
        navigate(`/order/${username}`)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    
    return (
    <LoginFormStyled onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <hr/>
        <h2>Connectez vous</h2>
        <TextInput
          value={username} 
          onChange={handleChange} 
          placeholder="Entrez votre prénom"
          Icon={BsPersonCircle}
          required
        />
        <Button
          className="login-button"
          label="Accéder à mon espace"
          size="large"
          Icon = {IoChevronForward}
        />
        
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 550px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${ theme.spacing.lg };
  border-radius: ${ theme.borderRadius.round };
  font-family: "Amatic SC", cursive;

  hr{
    border: 1.5px solid ${ theme.colors.loginLine };
    margin-bottom: ${ theme.gridUnit * 5 }px;
  }

  h1{
    color: ${ theme.colors.white };
    font-size: ${ theme.fonts.size.P5};
  }

  h2{
    color: ${ theme.colors.white };
    margin: 20px 10px 10px;
    font-size: ${ theme.fonts.size.P4};
  }
  button{
    width:100%;
  }
`;