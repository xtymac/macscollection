import classes from './MobileMenu.module.scss';

const MobileMenu = (props) => {
  return (
    <>
      {/* mobile menu */}
      <div className={classes['mobile-menu']}>
        <nav>
          <ul>
            <li>
              <a href=".">home</a>
            </li>
            <li>
              <a href=".">story</a>
            </li>
            <li>
              <a href=".">react.js</a>
            </li>
            <li>
              <a href=".">wordpress</a>
            </li>
            <li>
              <a href=".">adobexd</a>
            </li>
            <li>
              <a href=".">photos</a>
            </li>
            <li>
              <a href=".">about</a>
            </li>
          </ul>
        </nav>

        {/* Close mobile menu icon */}
        <div className={classes['menu__wrapper']}>
          <div tabindex="5" onClick={props.closeMenu}>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
