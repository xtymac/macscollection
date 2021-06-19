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
    </>
  );
};

export default Navigation;
