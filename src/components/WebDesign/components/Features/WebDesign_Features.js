import classes from './WebDesign_Features.module.scss';
import Subtitle from '../../../../Layout/Title/Subtitle';
import BoxListLeft from '../../../../Layout/BoxList/BoxListLeft';
import BoxListRight from '../../../../Layout/BoxList/BoxListRight';

const WebDesign_Features = (props) => {
  return (
    <>
      <div className={classes.webDesign_features}>
        <Subtitle className={classes.features_subtitle}>Features</Subtitle>
        <div className={classes.features_boxLists}>
          <ol className={classes.features_boxLists_orderList}>
            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_1.mov'
              }
            >
              <h3>Responsive Design</h3>
              <p>
                The website is delivered using flexbox, media query, and
                responsive units. The website is intended to maintain a
                consistent experience across different devices.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_2v2.mov'
              }
            >
              <h3>Mobile Friendly UI</h3>
              <p>
                From the mobile menu to the horizontal scroll to the flexible
                box, the user experience on the mobile site is unique and will
                not compromise on any screen.
              </p>
            </BoxListRight>

            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_3.mov'
              }
            >
              <h3>Reusable Components</h3>
              <p>
                From box list to content block, many components of this site are
                reusable; this is one of the key features of React. By utilizing
                it, the performance of the site has been improved by 10%.
              </p>
            </BoxListLeft>

            <BoxListRight
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_4.mov'
              }
            >
              <h3>Transition and Lazy Load</h3>
              <p>
                In order to load content such as showcase (video) faster, the
                page has implemented React transition and lazy loading. The
                continuous loading is happening when the user scrolls down.
              </p>
            </BoxListRight>

            <BoxListLeft
              className={classes.features_boxLists_boxList}
              videoSrc={
                'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_3.mov'
              }
            >
              <h3>Multi-Lingual Support</h3>
              <p>
                "Sakura Bloom" is a responsive button that sits on the home
                page. It is an indicator and clickable component that changes
                its state with the language of the site.
              </p>
            </BoxListLeft>
          </ol>
        </div>
      </div>
    </>
  );
};

export default WebDesign_Features;
