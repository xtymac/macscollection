import classes from './WebDesign_Features.module.scss';
import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';
import SAMPLE from '../../../../assets/video/Sample.mp4';

const WebDesign_Features = (props) => {
  return (
    <>
      <div className={classes.webDesign_features}>
        <Subtitle className={classes.features_subtitle}>Features</Subtitle>
        <div className={classes.features_boxLists}>
          <ol className={classes.features_boxLists_orderList}>
            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={SAMPLE}
            >
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fermentum pulvinar ultrices.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.features_boxLists_boxList}
              videoSrc={SAMPLE}
            >
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fermentum pulvinar ultrices.
              </p>
            </BoxListRight>

            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={SAMPLE}
            >
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fermentum pulvinar ultrices.
              </p>
            </BoxListLeft>
          </ol>
        </div>
      </div>
    </>
  );
};

export default WebDesign_Features;
