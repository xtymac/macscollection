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
            <Link to="/AimilyApp">AimilyApp</Link>
          </li>
          <li>
            <Link to="/MLB101">MLB101</Link>
          </li>
          <li>
            <Link to="/AdobeXD">AdobeXD</Link>
          </li>
          <li>
            <Link to="/More">More</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
