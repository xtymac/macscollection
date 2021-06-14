import logo from '../../../assets/Logo/logo.svg';
import classes from './ReactLogo.module.scss';

const ReactLogo = (props) => {
  return (
    <div>
      <img src={logo} className={classes['App-logo']} alt="logo" />
    </div>
  );
};

export default ReactLogo;
