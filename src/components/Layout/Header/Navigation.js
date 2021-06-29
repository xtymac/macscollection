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
            <Link to="/Design">Design</Link>
          </li>
          <li>
            <Link to="/ReactJS">React.js</Link>
          </li>
          <li>
            <Link to="/ReactNative">React Native</Link>
          </li>
          <li>
            <Link to="/Unity3D">Unity3D</Link>
          </li>
          <li>
            <Link to="/AdobeXD">AdobeXD</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
