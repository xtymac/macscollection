import React from 'react';
import ReactDOM from 'react-dom';
import classes from './MobileMenu.module.scss';
import { Link } from 'react-router-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeMenu} />;
};

const MenuOverlay = (props) => {
  const { home, web, mobile, unity, about, linkNav } = window.LANG;

  return (
    <>
      {/* mobile menu */}
      <div className={classes['mobile-menu']}>
        <nav>
          <ul onClick={props.closeMenu}>
            <li>
              <Link to="/">{home}</Link>
            </li>
            <li>
              <Link to="/WebDesign">{web}</Link>
            </li>
            <li>
              <Link to="/MobileApp">{mobile}</Link>
            </li>
            <li>
              <Link to="/UnityProject">{unity}</Link>
            </li>
            <li>
              <Link to="/AboutMe">{about}</Link>
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
