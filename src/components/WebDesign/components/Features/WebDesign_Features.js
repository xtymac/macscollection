import classes from './WebDesign_Features.module.scss';
import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';

const WebDesign_Features = (props) => {
  const {
    feature,
    webDesign: {
      Features_1_title,
      Features_1_body,
      Features_2_title,
      Features_2_body,
      Features_3_title,
      Features_3_body,
      Features_4_title,
      Features_4_body,
      Features_5_title,
      Features_5_body,
    },
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
              <h3>{Features_1_title}</h3>
              <p>{Features_1_body}</p>
            </BoxListLeft>

            <BoxListRight
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_2v2.mov'
              }
            >
              <h3>{Features_2_title}</h3>
              <p>{Features_2_body}</p>
            </BoxListRight>

            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_3.mov'
              }
            >
              <h3>{Features_3_title}</h3>
              <p>{Features_3_body}</p>
            </BoxListLeft>

            <BoxListRight
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_4.mov'
              }
            >
              <h3>{Features_4_title}</h3>
              <p>{Features_4_body}</p>
            </BoxListRight>

            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_5.mov'
              }
            >
              <h3>{Features_5_title}</h3>
              <p>{Features_5_body}</p>
            </BoxListLeft>
          </ol>
        </div>
      </div>
    </>
  );
};

export default WebDesign_Features;
