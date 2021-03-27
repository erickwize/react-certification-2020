import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from '../Backdrop';
import { ModalContainer } from './Modal.styled';

const ModalOverlay = (props) => {
  const content = (
    <ModalContainer>
      <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal__header ${props.headerClass}`}>
          <h2>{props.header}</h2>
        </header>
        <form
          onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}
        >
          <div className={`modal__content ${props.contentClass}`}>{props.children}</div>
          <footer className={`modal__footer ${props.footerClass}`}>{props.footer}</footer>
        </form>
      </div>
    </ModalContainer>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  const nodeRef = useRef(null);

  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        nodeRef={nodeRef}
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
