import classes from './WebDesign_Features.module.scss';
import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';

const WebDesign_Features = (props) => {
  const {
    feature,
    webDesign_Features_1_title,
    webDesign_Features_1_body,
    webDesign_Features_2_title,
    webDesign_Features_2_body,
    webDesign_Features_3_title,
    webDesign_Features_3_body,
    webDesign_Features_4_title,
    webDesign_Features_4_body,
    webDesign_Features_5_title,
    webDesign_Features_5_body,
  } = window.LANG;
  return (
    <>
      <div className={classes.webDesign_features}>
        <Subtitle className={classes.features_subtitle}>{feature}</Subtitle>
        <div className={classes.features_boxLists}>
          <ol className={classes.features_boxLists_orderList}>
            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_1.mov'
              }
            >
              <h3>{webDesign_Features_1_title}</h3>
              <p>{webDesign_Features_1_body}</p>
            </BoxListLeft>

            <BoxListRight
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_2v2.mov'
              }
            >
              <h3>{webDesign_Features_2_title}</h3>
              <p>{webDesign_Features_2_body}</p>
            </BoxListRight>

            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_3.mov'
              }
            >
              <h3>{webDesign_Features_3_title}</h3>
              <p>{webDesign_Features_3_body}</p>
            </BoxListLeft>

            <BoxListRight
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_4.mov'
              }
            >
              <h3>{webDesign_Features_4_title}</h3>
              <p>{webDesign_Features_4_body}</p>
            </BoxListRight>

            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_3.mov'
              }
            >
              <h3>{webDesign_Features_5_title}</h3>
              <p>{webDesign_Features_5_body}</p>
            </BoxListLeft>
          </ol>
        </div>
      </div>
    </>
  );
};

export default WebDesign_Features;
