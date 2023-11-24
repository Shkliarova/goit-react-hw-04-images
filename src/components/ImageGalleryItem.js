import { useState } from "react"
import { Modal } from "./Modal"

export const ImageGalleryItem = ({item}) => {
    const [isModalOpen, modalState] = useState(false);

    const openModal = () => {
        modalState(true)
    }

    const closeModal = () => {
        modalState(false)
    }

        return(
            <div>
                <li className="ImageGalleryItem" onClick={openModal}>
                    <img className="ImageGalleryItem-image" src={item.webformatURL} alt="img" />
                </li>
                {isModalOpen && (
                    <Modal 
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        item={item}
                    />
                )}
            </div>
        )
    }