import classes from './Navigation.module.scss';
import classNames from 'classnames'; //class拼装插件

import { Link } from 'react-router-dom';

const Navigation = () => {
  const { home, web, mobile, unity, about, linkNav } = window.LANG;
  return (
    <>
      {/*Style for JP*/}
      <nav className={classNames(classes.navbar, classes[linkNav])}>
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
