import classes from './Body.module.scss';
import slogan from '../../../assets/Logo/slogan.png';
import ReactLogo from '../../UI/Logo/ReactLogo';

const Body = (props) => {
  return (
    <>
      <div>
        <div className={classes.slogan}>
          <div className={classes.diem}>
            <img src={slogan} className={classes.carpe} alt="slogan" />
          </div>
          <div className={classes.logo}>
            <ReactLogo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
