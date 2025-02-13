import ModalReact from 'react-modal';
import css from '../Modal/Modal.module.css';
import { IoClose } from 'react-icons/io5';
import clsx from 'clsx';

const Modal = ({ modalIsOpen, closeModal, children }) => {
  const overlayClass = clsx(css.ReactModal_Overlay, modalIsOpen && css.isOpen);

  return (
    <ModalReact
      isOpen={modalIsOpen}
      closeTimeoutMS={300}
      overlayClassName={overlayClass}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className={css.reactModal_Content}
      bodyOpenClassName={css.ReactModal__Body}
    >
      <button className={css.closeBtn} onClick={closeModal}>
        <IoClose className={css.closeIcon} />
      </button>
      {children}
    </ModalReact>
  );
};

export default Modal;
