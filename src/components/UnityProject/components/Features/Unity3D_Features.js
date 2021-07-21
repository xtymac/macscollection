import classes from './Unity3D_Features.module.scss';
import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';

import Sample from '../../../../assets/video/Sample.mp4';
import MLB_1 from '../../Video/MLB_1.mov';
import MLB_2 from '../../Video/MLB_2.mov';
import MLB_3 from '../../Video/MLB_3.mov';
import MLB_4 from '../../Video/MLB_4.mov';

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
              videoSrc={
                'https://macscollection.s3.ap-northeast-1.amazonaws.com/Video/UnityProject/MLB_1.mov'
              }
            >
              <h3>Full Animation Characters</h3>
              <p>
                Each player on the field has been fully animated under the
                instruction of professional. The realtime movement makes the
                experience much more intuitive.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.unity3d_features_boxList}
              videoSrc={MLB_2}
            >
              <h3>Smooth Camera Movement</h3>
              <p>
                Each camera movement, timeline transition has been carefully
                calibrated in order to match the tension of the baseball game.
              </p>
            </BoxListRight>

            <BoxListLeft
              className={classes.unity3d_features_boxList}
              videoSrc={MLB_3}
            >
              <h3>Responsive UI Components</h3>
              <p>
                The user interfaces of this assignment is designed to match the
                color scheme and visual element. They are also responsive in
                adapting various screen sizes.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.unity3d_features_boxList}
              videoSrc={MLB_4}
            >
              <h3>Quick Rewind</h3>
              <p>
                After the first round of using the application, Quick Rewind is
                activated automatically. In this mode, transitions are skipped
                so that users can go through the experience at a fast pace.
              </p>
            </BoxListRight>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Unity3D_Features;
