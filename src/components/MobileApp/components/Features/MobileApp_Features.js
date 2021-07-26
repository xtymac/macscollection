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
                In just a few clicks, users are able to set SMART goals, being
                sure to make them Specific, Measurable, Achievable, Realistic,
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
                Our goal achievement process allows users to divide their goals
                into a to-do-list. By crossing them off from the list, users are
                able to monitor the progress of their master plans.
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
                A mini progress bar is always visible, measuring users’
                progress. Once users swipe off any of the tasks on the list, the
                list will update automatically. Once all of them are checked,
                congratulations, the goal has been reached.
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
                Having trouble sticking to the plan individually? We have weekly
                meetings and monthly workshops to motivate users. Users can come
                and share what they have accomplished so far and what next steps
                they are going to take.
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
