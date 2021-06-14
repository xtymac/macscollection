import { useState } from 'react';
import MobileMenu from '../Header/Menu/MobileMenu';
import classes from './Navigation.module.scss';

const Navigation = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const displayMobileMenuHandler = () => {
    setDisplayMobileMenu(true);
  };

  const closeMobileMenuHandler = () => {
    setDisplayMobileMenu(false);
  };

  return (
    <>
      <nav className={classes.navbar}>
        <ul>
          <li>
            <a href=".">home</a>
          </li>
          <li>
            <a href=".">storytelling</a>
          </li>
          <li>
            <a href=".">design</a>
          </li>
          <li>
            <a href=".">adobeXD</a>
          </li>
          <li>
            <a href=".">JLPT</a>
          </li>
          <li>
            <a href=".">photograph</a>
          </li>
          <li>
            <a href=".">about</a>
          </li>
        </ul>
      </nav>

      {/* mobile menu icon */}
      <div
        className={classes['menu__wrapper']}
        onClick={displayMobileMenuHandler}
      >
        <div className={classes['menu__item--meatball']} tabindex="5">
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
        </div>
      </div>

      {displayMobileMenu && <MobileMenu closeMenu={closeMobileMenuHandler} />}
    </>
  );
};

export default Navigation;
