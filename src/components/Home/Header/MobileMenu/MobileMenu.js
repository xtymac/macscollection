import React from 'react';
import ReactDOM from 'react-dom';
import classes from './MobileMenu.module.scss';
import { Link } from 'react-router-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeMenu} />;
};

const MenuOverlay = (props) => {
  return (
    <>
      {/* mobile menu */}
      <div className={classes['mobile-menu']}>
        <nav>
          <ul onClick={props.closeMenu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/WebDesign">Web Design</Link>
            </li>
            <li>
              <Link to="/MobileApp">Mobile App</Link>
            </li>
            <li>
              <Link to="/UnityProject">Unity Project</Link>
            </li>
            <li>
              <Link to="/AboutMe">About Me</Link>
            </li>
          </ul>
        </nav>

        {/* Close mobile menu icon */}
        <div className={classes['menu__wrapper']} onClick={props.closeMenu}>
          <div tabIndex="5">
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
