import { useState } from 'react';
import NavMenu from '../../UI/NavMenu';
import MobileMenu from '../../UI/MobileMenu';
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
      <NavMenu />

      {/* mobile menu icon */}
      <div className={classes['menu__wrapper']}>
        <div
          className={classes['menu__item--meatball']}
          tabindex="5"
          onClick={displayMobileMenuHandler}
        >
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
