import classes from './Showcase.module.scss';
// import IMAGES from './image/index.js';
import SvgLogo from '../../image/logo.svg';
import ShowcasePNG from '../../image/Showcase.png';

const Showcase = (props) => {
  return (
    <>
      <section className={classes.showcase}>
        <div className={classes.images}>
          <div className={classes.svgLogo}>
            <img src={SvgLogo} alt="Aimily App Logo" />
          </div>
          <div className={classes.screenshots}>
            <img src={ShowcasePNG} alt="Aimily App Screenshot" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
