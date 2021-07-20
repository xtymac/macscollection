import classes from './Unity3D_Features.module.scss';
import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';

import Sample from '../../../../assets/video/Sample.mp4';
import MLB_1 from '../../Video/MLB_1.mov';
import MLB_2 from '../../Video/MLB_2.mov';
import MLB_3 from '../../Video/MLB_3.mov';

const Unity3D_Features = (props) => {
  return (
    <>
      <div className={classes.unity3d_features}>
        <Subtitle className={classes.unity3d_features_subtitle}>
          Features
        </Subtitle>
        <div className={classes.unity3d_features_boxLists}>
          <ol>
            <BoxListLeft
              className={classes.unity3d_features_boxList}
              videoSrc={MLB_1}
            >
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fermentum pulvinar ultrices.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.unity3d_features_boxList}
              videoSrc={MLB_2}
            >
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fermentum pulvinar ultrices.
              </p>
            </BoxListRight>

            <BoxListLeft
              className={classes.unity3d_features_boxList}
              videoSrc={MLB_3}
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

export default Unity3D_Features;
