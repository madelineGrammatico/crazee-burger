import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import TextInput from '../../reusables-ui/TextInput'
import PrimaryButton from '../../reusables-ui/PrimaryButton'
import { theme } from '../../../theme'
import { BsPersonCircle } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'

export default function LoginForm() {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setInputValue('')
        navigate(`/order/${inputValue}`)
        
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    
    return (
    <LoginFormStyled onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <hr/>
        <h2>Connectez vous</h2>
        <TextInput 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Entrez votre prénom"
          Icon={<BsPersonCircle className='icon'/>}
          required
        />
        <PrimaryButton
          label="Accéder à mon espace"
          Icon = {<IoChevronForward />}
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
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:${ theme.fonts.size.P0};
    margin-left: 10px;
  }
  
`;