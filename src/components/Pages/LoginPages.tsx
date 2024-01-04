import { useState } from "react"

export function LoginPage() {
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
        <div>
            <h1>Bienvenue chez nous</h1>
            <h2>Connectez vous</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Entrez votre prénom" onChange={handleChange} value={inputValue} required></input>
                <button>Accédez à votre espace</button>
            </form>
        </div>
    )
}