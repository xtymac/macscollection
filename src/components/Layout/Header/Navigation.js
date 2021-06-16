import { useState } from 'react';
import MobileMenu from './MobileMenu/MobileMenu';
import classes from './Navigation.module.scss';

import { Link } from 'react-router-dom';

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/design">Design</Link>
          </li>
          <li>
            <Link to="/javascript">Javascript</Link>
          </li>
          <li>
            <Link to="/reactJS">React.js</Link>
          </li>
          <li>
            <Link to="/wordpress">Wordpress</Link>
          </li>
          <li>
            <Link to="/adobeXD">AdobeXD</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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

      {/* toggle mobile menu */}
      {displayMobileMenu && <MobileMenu closeMenu={closeMobileMenuHandler} />}
    </>
  );
};

export default Navigation;
