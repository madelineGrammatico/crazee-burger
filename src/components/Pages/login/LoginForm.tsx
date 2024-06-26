import React from 'react'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

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
        <h2>Connectez vous</h2>
        <input
            type="text" 
            placeholder="Entrez votre prénom" 
            onChange={handleChange} 
            value={inputValue} 
            required
        />
        <button>Accéder à mon espace</button>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  background-color: #7cd7d8;
`;