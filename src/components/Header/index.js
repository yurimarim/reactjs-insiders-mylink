import './header.css'
import { Link } from 'react-router-dom'
import { BsGithub, BsInstagram } from 'react-icons/bs'

export function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <a
          className="icons"
          href="https://github.com/yurimarim"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={24} color="#fff" />
        </a>
        <a
          className="icons"
          href="https://instagram.com/yuri_marim"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram size={24} color="#fff" />
        </a>
        <Link to="/links">
          <button className="links-button">Meus Links</button>
        </Link>
      </div>
    </div>
  )
}
