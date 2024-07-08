import React from "react";
import "./React-Modal.css"; // Ajoutez du style pour la modal

const ReactModal= ({ isOpen, onClose, message, title ,children}) => {
  if (!isOpen) 
    return null;
  
  return (
    <div className="overlay" onClick={onClose}>
    <div className="modal" onClick={e => e.stopPropagation()}>
      <h2>{title}</h2>
        <spam>{message}</spam>
      <button className="close-button" onClick={onClose}>X</button>
      <div className="modal-content">
        {children}
      </div> 
    </div>
    </div>
  );
};

export default ReactModal;