import classes from './Unity3D_Features.module.scss';
import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';

const Unity3D_Features = (props) => {
  const {
    feature,
    unity_Features_1_title,
    unity_Features_1_body,
    unity_Features_2_title,
    unity_Features_2_body,
    unity_Features_3_title,
    unity_Features_3_body,
    unity_Features_4_title,
    unity_Features_4_body,
  } = window.LANG;

  return (
    <>
      <div className={classes.unity3d_features}>
        <Subtitle className={classes.unity3d_features_subtitle}>
          {feature}
        </Subtitle>
        <div className={classes.unity3d_features_boxLists}>
          <ol>
            <BoxListLeft
              className={classes.unity3d_features_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/UnityProject/MLB_1.mov'
              }
            >
              <h3>{unity_Features_1_title}</h3>
              <p>{unity_Features_1_body}</p>
            </BoxListLeft>

            <BoxListRight
              className={classes.unity3d_features_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/UnityProject/MLB_2.mov'
              }
            >
              <h3>{unity_Features_2_title}</h3>
              <p>{unity_Features_2_body}</p>
            </BoxListRight>

            <BoxListLeft
              className={classes.unity3d_features_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/UnityProject/MLB_3.mov'
              }
            >
              <h3>{unity_Features_3_title}</h3>
              <p>{unity_Features_3_body}</p>
            </BoxListLeft>

            <BoxListRight
              className={classes.unity3d_features_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/UnityProject/MLB_4.mov'
              }
            >
              <h3>{unity_Features_4_title}</h3>
              <p>{unity_Features_4_body}</p>
            </BoxListRight>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Unity3D_Features;
