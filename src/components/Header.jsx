import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Coffee House</h1>
        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
