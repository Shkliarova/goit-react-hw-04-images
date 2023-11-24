import ReactModal from "react-modal"
import { useEffect } from "react";

ReactModal.setAppElement('#root');

export const Modal = ({ isOpen, onClose, item }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  
      return (
        <div className="Overlay" onClick={onClose}>
          <ReactModal className="Modal" isOpen={isOpen} onRequestClose={onClose} contentLabel="Modal">
            <img src={item.largeImageURL} alt="largeImage" />
          </ReactModal>
        </div>
      );
    }