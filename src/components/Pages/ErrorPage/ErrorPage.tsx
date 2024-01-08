import { Link } from "react-router-dom";

export default function ErrorPage({num}: {num: number}) {
  return (
    <main>
        <div>ErrorPage {num}</div>
        <Link to="/">Retourner à la page d'accueil</Link>
    </main>
    
  )
}
