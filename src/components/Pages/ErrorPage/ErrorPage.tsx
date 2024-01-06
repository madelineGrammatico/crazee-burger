import { Link } from "react-router-dom";

export default function ErrorPage({num}: {num: number}) {
  return (
    <main>
        <div>Error {num}</div>
        <Link to="/">retour au menu</Link>
    </main>
    
  )
}
