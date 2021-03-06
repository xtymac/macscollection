import classes from './ReactNative_Showcase.module.scss';

import SVGLOGO from '../../image/logo.svg';
import SHOWCASEPNG from '../../image/Showcase.png';

import Fade from 'react-reveal/Fade';

const ReactNative_Showcase = (props) => {
  return (
    <>
      <section className={classes.reactNative_showcase}>
        <div className={classes.reactNative_showcase_image}>
          <div className={classes.reactNative_showcase_image_svgLogo}>
            <img
              className={classes.reactNative_showcase_image_svgLogo_img}
              src={SVGLOGO}
              alt="Aimily App Logo"
            />
          </div>
          <div className={classes.reactNative_showcase_image_screenshots}>
            <Fade left>
              <img
                className={classes.reactNative_showcase_image_screenshots_img}
                src={SHOWCASEPNG}
                alt="Aimily App Screenshot"
              />
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReactNative_Showcase;
