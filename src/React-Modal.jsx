import React from "react";
import "./React-Modal.css"; // Ajoutez du style pour la modal

const ReactModal = ({
  isOpen,
  onClose,
  message,
  title,
  children,
  modalBackground = "#fff",
  closeButtonBackground = "#000",
  closeButtonHoverBackground = "#ff0000",
}) => {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{ background: modalBackground }}
      >
        <h2 className="title-modal">{title}</h2>
        <span>{message}</span>
        <button
          className="close-button"
          onClick={onClose}
          style={{
            '--close-button-background': closeButtonBackground,
            '--hover-background': closeButtonHoverBackground,
          }}
        >
          X
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default ReactModal;
