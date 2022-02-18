import './modal.css'
import { FiX, FiClipboard } from 'react-icons/fi'

export function ModalItem({ closeModal, content }) {
  async function copyLink() {
    await navigator.clipboard.writeText(content.link)
    alert('URL Copiada com sucesso!')
  }

  return (
    <div className="container-modal">
      <div className="header-modal">
        <h1>Link Encurtado:</h1>
        <button onClick={closeModal}>
          <FiX size={28} color="#26427e" />
        </button>
      </div>
      <div className="content-modal">
        <p>{content.long_url}</p>
        <button onClick={copyLink}>
          {content.link}
          <FiClipboard size={20} color="#FFF" />
        </button>
      </div>
    </div>
  )
}
