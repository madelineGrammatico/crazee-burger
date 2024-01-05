import React from 'react'
import { useState } from "react"

export default function LoginForm() {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(`Bonjour ${inputValue}`)
        setInputValue('')
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    
  return (
    <form onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez vous</h2>
            <input
                type="text" 
                placeholder="Entrez votre prénom" 
                onChange={handleChange} 
                value={inputValue} 
                required
            />
            <button>Accédez à votre espace</button>
        </form>
  )
}
