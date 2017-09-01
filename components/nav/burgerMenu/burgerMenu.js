import React from 'react';

const BurgerMenu = ({ _className, toggleSidebar }) => (
  <div className={_className} onClick={toggleSidebar}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
);

export default BurgerMenu;