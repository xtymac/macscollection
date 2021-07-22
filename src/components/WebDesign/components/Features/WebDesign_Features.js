import classes from './WebDesign_Features.module.scss';
import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';

import SAMPLE from '../../../../assets/video/Sample.mp4';
import WEBDESIGN_1 from '../../Video/WebDesign_1.mov';
import WEBDESIGN_2 from '../../Video/WebDesign_2.mov';
import WEBDESIGN_3 from '../../Video/WebDesign_3.mov';

const WebDesign_Features = (props) => {
  return (
    <>
      <div className={classes.webDesign_features}>
        <Subtitle className={classes.features_subtitle}>Features</Subtitle>
        <div className={classes.features_boxLists}>
          <ol className={classes.features_boxLists_orderList}>
            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={WEBDESIGN_1}
            >
              <h3>Responsive Design</h3>
              <p>
                The website is delivered using flexible, media query, and
                responsive units. It is supposed to maintain a consistent
                experience across different devices.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.features_boxLists_boxList}
              videoSrc={WEBDESIGN_2}
            >
              <h3>Mobile Friendly UI</h3>
              <p>
                Whether it is the mobile menu, horizontal scroll, or flexible
                box, the user experience on the mobile site is unique. It will
                not compromise on any screen.
              </p>
            </BoxListRight>

            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={WEBDESIGN_3}
            >
              <h3>Reusable Components</h3>
              <p>
                From box list to content block, many components of this site is
                reusable; this is one of the key features of React. By utilizing
                it, the performance of the site has been improved by 10%.
              </p>
            </BoxListLeft>
          </ol>
        </div>
      </div>
    </>
  );
};

export default WebDesign_Features;
