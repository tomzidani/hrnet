import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className="app-notfound">
      <div className="notfound__wrapper">
        <h2 className="notfound__title">Page introuvable</h2>
        <p className="notfound__text">Il semblerait que cette page n'existe pas ou a été déplacée.</p>

        <Link to="/">Retour à l'accueil</Link>
      </div>
    </main>
  )
}

export default NotFound
