import React from 'react';
import './Navbar.css';
import { useModalContext } from "../Hook/useModalContext";

const Navbar: React.FC = () => {
  const { openModal, setSearchString } = useModalContext();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand center">
          Atllas Home
          <button className="btn-primary" onClick={openModal}>
            Join the team
          </button>
          <form className="search-form" >
            <input
              type="text"
              placeholder="Enter search term"
              className="search-input"
              onChange={(event) => setSearchString(event.target.value)}
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;