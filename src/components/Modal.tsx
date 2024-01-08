import { useRef, MouseEvent } from "react";
import styles from "../styles/Modal.module.css";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose, isOpen }: Props) => {
  const outsideRef = useRef(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div className={styles.modal}>
      <div
        ref={outsideRef}
        className={styles.modal__overlay}
        onClick={handleClickOutside}
      >
        <div className={styles.modal__box}>
          <button className={styles.modal__close} onClick={onClose}>
            x
          </button>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
