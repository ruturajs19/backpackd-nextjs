import React, { FC } from "react";
import ReactDOM from "react-dom";
import { ModalBackdrop, ModalContent } from "./Modal.styles";

interface ModalProps {
  modalText: string;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { modalText, closeModal } = props;

  return ReactDOM.createPortal(
    <>
      <ModalBackdrop />
      <ModalContent>
        <div className="modal-body">{modalText}</div>
        <div className="modal-footer">
          {modalText !== "Loading..." && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
          )}
        </div>
      </ModalContent>
    </>,
    document.getElementById("modal-portal") as HTMLElement
  );
};

export default Modal;
