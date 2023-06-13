import type { FC } from "react";
import { useState } from "react";
import { IAgent } from "../../types/Agent";
import axios from 'axios';
import './Agent.css';
import { useModalContext } from '../../Hook/useModalContext';
import { IsformProps } from "../../types/Agent";

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {

    const newProps: IsformProps = {
      key1: agent.agentLicence,
      key2: agent.review
    }
    
    const { set_Isform, reload } = useModalContext();
    

    const [review, setReview] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => { setIsModalOpen(true); }
    const closeModal = () => { setIsModalOpen(false); reload(); }

    const handleSubmit = async () => {
        await axios.post('/createreview', {
          id: agent.id,
          review: review
        }).then(response => {
          closeModal();
          console.log(response);
        }).catch(error => {
          console.log(error);
        });
    };

  return (
    <div className="container">
      <header>
        <div className="avatar-holder">
          <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
        </div>
        <h2 className="agent-name">{agent.firstName + " " + agent.lastName}</h2>
      </header>
      <div className="body" onClick={() => set_Isform(newProps) }>{agent.aboutMe}</div>
      <footer className="relative">
        <div className="full-width-flex-box">
          <div className="one-third-flex-box">
            <span>{agent.address}</span>
          </div>
          <div className="one-third-flex-box">
            <span>Areas of Practice: {agent.practiceAreas}</span>
          </div>
        </div>
        <button className="btn-primary fixed" onClick={ openModal }>
          write review
        </button>
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
                  Write Review
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
              <form>
                  <div className="form-group">
                      <textarea
                      id="reivew"
                      className="form-control"
                      value={review}
                      onChange={(event) => setReview(event.target.value)}
                      />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                      Add Review
                  </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Agent;
