import { useState } from 'react';
import Logo from '../Header/Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu/MobileMenu';
import MobileMenuIcon from '../Header/MobileMenu/MobileMenuIcon';
import classes from './Header.module.scss';

const Header = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const displayMobileMenuHandler = () => {
    setDisplayMobileMenu(true);
  };

  const closeMobileMenuHandler = () => {
    setDisplayMobileMenu(false);
  };

  return (
    <header className={classes.header}>
      <Logo className={classes.logo} />

      <MobileMenuIcon
        className={classes.mobileMenuIcon}
        openMenu={displayMobileMenuHandler}
      />

      {/* toggle mobile menu */}
      {displayMobileMenu && <MobileMenu closeMenu={closeMobileMenuHandler} />}

      <Navigation />
    </header>
  );
};

export default Header;
