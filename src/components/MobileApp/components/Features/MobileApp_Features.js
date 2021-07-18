import classes from './MobileApp_Features.module.scss';

import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';

import AIMILY_1 from '../../video/Aimily_1.mov';
import AIMILY_2 from '../../video/Aimily_2.mov';
import AIMILY_3 from '../../video/Aimily_3.mov';
import AIMILY_4 from '../../video/Aimily_4.mov';

import MobileAppDownload from './Download/MobileApp_Download';
import MobileAppNext from './Next/MobileApp_Next';

const MobileApp_Features = () => {
  return (
    <>
      <section className={classes.reactNative_feature}>
        <div className={classes.reactNative_container}>
          <Subtitle className={classes.subtitle}>Features</Subtitle>
        </div>

        <div className={classes.reactNative_boxLists}>
          <ol className={classes.reactNative_orderList}>
            <BoxListLeft
              className={classes.reactNative_boxList}
              videoSrc={AIMILY_1}
            >
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fermentum pulvinar ultrices.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.reactNative_boxList}
              videoSrc={AIMILY_2}
            >
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fermentum pulvinar ultrices.
              </p>
            </BoxListRight>

            <BoxListLeft
              className={classes.reactNative_boxList}
              videoSrc={AIMILY_3}
            >
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fermentum pulvinar ultrices.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.reactNative_boxList}
              videoSrc={AIMILY_4}
            >
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fermentum pulvinar ultrices.
              </p>
            </BoxListRight>
          </ol>
        </div>
        <div className={classes.reactNative_download}>
          <Subtitle className={classes.reactNative_subtitle}>Download</Subtitle>
          <MobileAppDownload />
        </div>
        <div className={classes.reactNative_next}>
          <MobileAppNext />
        </div>
      </section>
    </>
  );
};

export default MobileApp_Features;
