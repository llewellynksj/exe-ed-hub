import { useRef, MouseEvent } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
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
    <div className={styles.Modal_section}>
      <div
        ref={outsideRef}
        className={styles.Modal_bg}
        onClick={handleClickOutside}
      >
        <div className={styles.Modal}>
          <IoCloseCircleOutline
            size={30}
            className={styles.Modal_close}
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
