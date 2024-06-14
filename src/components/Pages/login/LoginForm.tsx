import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import TextInput from '../../reusables-ui/TextInput'
import PrimaryButton from '../../reusables-ui/PrimaryButton'

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
          Icon={""}
          required
        />
        <PrimaryButton
          label="Accéder à mon espace"
          Icon = ""
        />
        
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 550px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr{
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1{
    color: white;
    font-size: 48px;
  }

  h2{
    color: white;
    margin: 20px 10px 10px;
    font-size: 36px;
  }
`;