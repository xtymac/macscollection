import classes from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { home, web, mobile, unity, about } = window.LANG;
  return (
    <>
      <nav className={classes.navbar}>
        <ul>
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
    </>
  );
};

export default Navigation;
