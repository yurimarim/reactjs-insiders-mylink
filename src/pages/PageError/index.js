import './error.css'
import { Link } from 'react-router-dom'

export function PageError() {
  return (
    <div className="container-page-error">
      <img src="/404-error.png" alt="404 Error" />
      <h2>Página não encontrada! 😥</h2>
      <h4>Clique aqui para ir à Home 👇🏼</h4>
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </div>
  )
}
