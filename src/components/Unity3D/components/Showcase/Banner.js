import classes from './Banner.module.scss';
import BANNER from '../../image/banner.png';

const Banner = () => {
  return (
    <>
      <div className={classes.banner}>
        <img src={BANNER} alt="MLB Banner" />
      </div>
      ;
    </>
  );
};

export default Banner;
