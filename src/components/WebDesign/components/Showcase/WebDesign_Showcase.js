import classes from './WebDesign_Showcase.module.scss';
import SLOGAN from '../../image/Slogan.svg';

const WebDesign_Showcase = () => {
  return (
    <>
      <div className={classes.webDesign_showcase}>
        <div className={classes.showcase_container}>
          <img
            className={classes.showcase_container_img}
            src={SLOGAN}
            alt="Slogan"
          />
        </div>
      </div>
    </>
  );
};

export default WebDesign_Showcase;
