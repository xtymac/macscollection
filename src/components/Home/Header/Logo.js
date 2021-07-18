import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  const styles = `${classes.logo} ${props.className}`;

  return (
    <div id="logo" className={styles}>
      <Link to="/">Mac's Collection</Link>
    </div>
  );
};

export default Logo;
