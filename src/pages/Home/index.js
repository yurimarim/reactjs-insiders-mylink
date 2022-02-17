import React, { useState } from 'react'
import './home.css'
import { FiLink } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { ModalItem } from '../../components/ModalItem'

export function Home(props) {
  const [link, setLink] = useState('')
  const [showModal, setShowModal] = useState(false)

  function handleShortLink() {
    setShowModal(true)
  }

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
            <input
              placeholder="Cole seu link aqui"
              value={link}
              onChange={e => setLink(e.target.value)}
            />
          </div>

          <button onClick={handleShortLink}>Gerar Link</button>
        </div>
      </div>

      {showModal && <ModalItem />}
    </>
  )
}
