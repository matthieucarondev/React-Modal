declare module 'react-modal-mc' {
    import * as React from 'react';
  
    export interface ReactModalProps {
      isOpen: boolean;
      onClose: () => void;
      title?: string;
      message?: string;
      children?: React.ReactNode;
    }
  
    const ReactModal: React.FC<ReactModalProps>;
  
    export default ReactModal;
  }