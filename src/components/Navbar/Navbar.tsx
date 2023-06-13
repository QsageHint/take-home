import React from 'react';
import './Navbar.css';
import { useModalContext } from "../Hook/useModalContext";

const Navbar: React.FC = () => {
  const { openModal } = useModalContext();
  return (
    <nav className="navbar">
      <div className="navbar-brand center">
        Atllas Home
        <button className="btn-primary" onClick={openModal}>
          Join the team
        </button>
      </div>
    </nav>
  );
};

export default Navbar;