import classes from './Sakura.module.scss';
import SAKURA from './sakura_unfilled.svg';

const Sakura = (props) => {
  return (
    <div onClick={props.fullFill}>
      <img src={props.imgSrc} className={classes['App-logo']} alt="logo" />
    </div>
  );
};
export default Sakura;
