import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand center">
        Atllas Home
        <button className="btn-primary">
          Join the team
        </button>
      </div>
    </nav>
  );
};

export default Navbar;