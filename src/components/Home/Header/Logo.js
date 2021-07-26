import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

import LOGO from './HeadLogo.svg';

const Logo = (props) => {
  const styles = `${classes.logo} ${props.className}`;

  return (
    <div id="logo" className={styles}>
      <Link to="/">
        <img src={LOGO} alt="Logo" className={classes.logoImg} />
      </Link>
    </div>
  );
};

export default Logo;
