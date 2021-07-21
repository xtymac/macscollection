import classes from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav className={classes.navbar}>
        <ul>
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
    </>
  );
};

export default Navigation;
