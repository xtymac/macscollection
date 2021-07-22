import classes from './MobileApp_Features.module.scss';

import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';

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
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/MobileApp/Aimily_1.mov'
              }
            >
              <h3>Make your goal smart</h3>
              <p>
                In just a few clicks, you are able to set your first SMART goal.
                Be sure to make it Specific, Measurable, Achievable, Realistic,
                and Timely.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.reactNative_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/MobileApp/Aimily_2.mov'
              }
            >
              <h3>Low effort, high impact</h3>
              <p>
                Our goal achievement process allows you to divide your goal into
                a todo-list. By cross them off from the list, you are able to
                master the progress of your master plan.
              </p>
            </BoxListRight>

            <BoxListLeft
              className={classes.reactNative_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/MobileApp/Aimily_3.mov'
              }
            >
              <h3>See your progress, lively</h3>
              <p>
                The mini progress bar is always there, measuring your progress.
                Once you swape off any of the tasks on the list, it will update
                automatically. Once you checked all of them. Congratulation! You
                have just reached one goal.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.reactNative_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/MobileApp/Aimily_4.mov'
              }
            >
              <h3>Let us support you</h3>
              <p>
                Having trouble sticking the plan individually? We have weekly
                meetings and monthly workshops to motivate you. Come and share
                what you have accomplished so far and what next steps you are
                going to take.
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
