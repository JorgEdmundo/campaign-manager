import React from 'react';
import MenuIcon from '../../../icons/MenuIcon';

import './header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header-wrap container">
        <span className="menu-icon">
          <MenuIcon />
        </span>
        <h1 className="title">Kampagnenmanager</h1>
      </div>
    </div>
  );
}

export default Header;
