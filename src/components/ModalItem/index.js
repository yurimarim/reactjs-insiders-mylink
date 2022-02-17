import './modal.css'
import { FiX, FiClipboard } from 'react-icons/fi'

export function ModalItem(props) {
  return (
    <div className="container-modal">
      <div className="header-modal">
        <h1>Link Encurtado:</h1>
        <button>
          <FiX size={28} color="#26427e" />
        </button>
      </div>
      <div className="content-modal">
        <span>https://www.google.com</span>
        <button>
          https://bit.ly/12900
          <FiClipboard size={20} color="#FFF" />
        </button>
      </div>
    </div>
  )
}
