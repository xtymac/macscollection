import classes from './Header.module.scss';
import Logo from '../Header/Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
