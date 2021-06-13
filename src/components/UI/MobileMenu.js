import React from 'react';
import ReactDOM from 'react-dom';
import classes from './MobileMenu.module.scss';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeMenu} />;
};

const MenuOverlay = (props) => {
  return (
    <>
      {/* mobile menu */}
      <div className={classes['mobile-menu']}>
        <nav>
          <ul>
            <li>
              <a href=".">home</a>
            </li>
            <li>
              <a href=".">story</a>
            </li>
            <li>
              <a href=".">react.js</a>
            </li>
            <li>
              <a href=".">wordpress</a>
            </li>
            <li>
              <a href=".">adobexd</a>
            </li>
            <li>
              <a href=".">photos</a>
            </li>
            <li>
              <a href=".">about</a>
            </li>
          </ul>
        </nav>

        {/* Close mobile menu icon */}
        <div className={classes['menu__wrapper']}>
          <div tabindex="5" onClick={props.closeMenu}>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
          </div>
        </div>
      </div>
    </>
  );
};

const portalElement = document.getElementById('overlays');

const MobileMenu = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeMenu={props.closeMenu} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <MenuOverlay closeMenu={props.closeMenu} />,
        portalElement
      )}
    </>
  );
};

export default MobileMenu;
