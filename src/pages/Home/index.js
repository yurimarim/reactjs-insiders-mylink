import './home.css'
import { FiLink } from 'react-icons/fi'
import { Header } from '../../components/Header'

export function Home() {
  return (
    <>
      <Header />
      <div className="container-home">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <h1>My Links</h1>
          <span>Cole seu link para encurtar 👇🏼</span>
        </div>

        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff" />
            <input placeholder="Cole seu link aqui" />
          </div>

          <button>Gerar Link</button>
        </div>
      </div>
    </>
  )
}
