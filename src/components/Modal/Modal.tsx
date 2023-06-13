import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';
import { useModalContext } from '../Hook/useModalContext';


const Modal: React.FC = () => {
  const { isModalOpen, closeModal, reload } = useModalContext();

  const [first_name, setfirstName] = useState("");
  const [last_name, setlastName] = useState("");
  const [photourl, setPhotoUrl] = useState("");
  const [agentLicence, setAgentLicence] = useState("");
  const [address, setAddress] = useState("");
  const [practiceAreas, setPracticeAreas] = useState<string[]>([]);
  const [aboutMe, setAboutMe] = useState("");

  const handleAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const newPracticeArea: string = event.currentTarget.value;
    if (event.key === "Enter") {
      setPracticeAreas([...practiceAreas, newPracticeArea]);
      event.currentTarget.value = "";
    }
  };

  const handleSubmit = async () => {
    await axios.post("/create", {
      firstName: first_name,
      lastName: last_name,
      photoUrl: photourl,
      agentLicence: agentLicence,
      address: address,
      practiceAreas: practiceAreas.join(","),
      aboutMe: aboutMe
    }).then(response => {
      closeModal();
      reload();
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };

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
              <form onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    className="form-control"
                    value={first_name}
                    onChange={(event) => setfirstName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    className="form-control"
                    value={last_name}
                    onChange={(event) => setlastName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="photourl">Photo URL</label>
                  <input
                    type="text"
                    id="photourl"
                    className="form-control"
                    value={photourl}
                    onChange={(event) => setPhotoUrl(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="agentLicence">Agent Licence</label>
                  <input
                    type="text"
                    id="agentLicence"
                    className="form-control"
                    value={agentLicence}
                    onChange={(event) => setAgentLicence(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="practiceAreas">Practice Areas (use Enter to seperate areas)</label>
                  <input
                    type="text"
                    id="practiceAreas"
                    className="form-control"
                    onKeyDown={handleAdd}
                  />
                  <ul className="list-inline">
                    {practiceAreas.map((practiceArea) => (
                      <li className="list-inline-item badge badge-primary">{practiceArea}</li>
                    ))}
                  </ul>
                </div>
                <div className="form-group">
                  <label htmlFor="aboutMe">About Me</label>
                  <textarea
                    id="aboutMe"
                    className="form-control"
                    value={aboutMe}
                    onChange={(event) => setAboutMe(event.target.value)}
                  />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;