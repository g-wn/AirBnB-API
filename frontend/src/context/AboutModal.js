import { createContext, useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const AboutModalContext = createContext();

export function AboutModalProvider({ children }) {
  const aboutModalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(aboutModalRef.current);
  }, []);

  return (
    <>
      <AboutModalContext.Provider value={value}>{children}</AboutModalContext.Provider>
      <div ref={aboutModalRef} />
    </>
  );
}

export function AboutModal({ onClose, children }) {
  const modalNode = useContext(AboutModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id='about-modal'>
      <div
        id='modal-background'
        onClick={onClose}
      />
      <div id='about-modal-content'>{children}</div>
    </div>,
    modalNode
  );
}
