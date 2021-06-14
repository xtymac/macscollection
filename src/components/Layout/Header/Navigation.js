import { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
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
            <a href=".">Home</a>
          </li>
          <li>
            <a href=".">Storytelling</a>
          </li>
          <li>
            <a href=".">Design</a>
          </li>
          <li>
            <a href=".">AdobeXD</a>
          </li>
          <li>
            <a href=".">JLPT</a>
          </li>
          <li>
            <a href=".">Photograph</a>
          </li>
          <li>
            <a href=".">About</a>
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
