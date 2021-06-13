import classes from './NavMenu.module.scss';

const NavMenu = (props) => {
  return (
    <>
      {/* Desktop NavBar */}
      <nav className={classes.navbar}>
        <ul id="menu">
          <li>
            <a href=".">home</a>
          </li>
          <li>
            <a href=".">storytelling</a>
          </li>
          <li>
            <a href=".">design</a>
          </li>
          <li>
            <a href=".">adobexd</a>
          </li>
          <li>
            <a href=".">JLPT</a>
          </li>
          <li>
            <a href=".">photograph</a>
          </li>
          <li>
            <a href=".">more</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
