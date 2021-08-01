import classes from './MobileApp_Features.module.scss';

import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';

import MobileAppDownload from './Download/MobileApp_Download';
import MobileAppNext from './Next/MobileApp_Next';

const MobileApp_Features = () => {
  const {
    feature,
    mobileApp_Features_1_title,
    mobileApp_Features_1_body,
    mobileApp_Features_2_title,
    mobileApp_Features_2_body,
    mobileApp_Features_3_title,
    mobileApp_Features_3_body,
    mobileApp_Features_4_title,
    mobileApp_Features_4_body,
    download,
  } = window.LANG;

  return (
    <>
      <section className={classes.reactNative_feature}>
        <div className={classes.reactNative_container}>
          <Subtitle className={classes.subtitle}>{feature}</Subtitle>
        </div>

        <div className={classes.reactNative_boxLists}>
          <ol className={classes.reactNative_orderList}>
            <BoxListLeft
              className={classes.reactNative_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/MobileApp/Aimily_1.mov'
              }
            >
              <h3>{mobileApp_Features_1_title}</h3>
              <p>{mobileApp_Features_1_body}</p>
            </BoxListLeft>

            <BoxListRight
              className={classes.reactNative_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/MobileApp/Aimily_2.mov'
              }
            >
              <h3>{mobileApp_Features_2_title}</h3>
              <p>{mobileApp_Features_2_body}</p>
            </BoxListRight>

            <BoxListLeft
              className={classes.reactNative_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/MobileApp/Aimily_3.mov'
              }
            >
              <h3>{mobileApp_Features_3_title}</h3>
              <p>{mobileApp_Features_3_body}</p>
            </BoxListLeft>

            <BoxListRight
              className={classes.reactNative_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/MobileApp/Aimily_4.mov'
              }
            >
              <h3>{mobileApp_Features_4_title}</h3>
              <p>{mobileApp_Features_4_body}</p>
            </BoxListRight>
          </ol>
        </div>
        <div className={classes.reactNative_download}>
          <Subtitle className={classes.reactNative_subtitle}>
            {download}
          </Subtitle>
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
