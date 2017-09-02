import React from 'react';

const BurgerMenu = ({ _className, toggleSidebar }) => (
  <div className={_className} onClick={toggleSidebar}>
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </div>
);

export default BurgerMenu;
