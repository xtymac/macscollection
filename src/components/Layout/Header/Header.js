import classes from './Header.module.scss';
import Logo from '../Header/Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
