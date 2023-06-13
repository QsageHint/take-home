import React from 'react';
import './Modal.css';
import { useModalContext } from '../../Hook/useModalContext';
import AddFrom from '../addForm/addForm';

const Modal: React.FC = () => {
  const { isModalOpen, closeModal, isform } = useModalContext();

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
                {isform === "Yes"? "Add Agent Here": "Agent License Info"}
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
              {isform === "Yes"? <AddFrom />: isform}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;