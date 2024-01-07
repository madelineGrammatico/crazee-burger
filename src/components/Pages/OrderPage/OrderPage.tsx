import React from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function OrderPage() {
    const { name } = useParams()
    const navigate = useNavigate()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate("/")
    }
  return (
    <main>
        <h1>{`Bonjour ${name}`}</h1>  
        <button onClick={handleClick}>Déconnection</button>
    </main>  
  )
}
