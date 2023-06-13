import React from 'react';
import './Modal.css';
import { useModalContext } from '../Hook/useModalContext';

const Modal: React.FC = () => {
  const { isModalOpen, closeModal } = useModalContext();

  return (
    <>
      <div
        className= {isModalOpen? 'modal show' : 'modal'}
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Agent Here
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              >&times;</button>
            </div>
            <div className="modal-body">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;