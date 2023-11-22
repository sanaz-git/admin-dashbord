import { createPortal } from "react-dom";

const Modal = ({ isOpen, close, title, body, children }) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div>this is portal</div>,
          document.getElementById("modal")
        )}
    </>
  );
};
export default Modal;
