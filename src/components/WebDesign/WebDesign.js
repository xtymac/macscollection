import classes from './WebDesign.module.scss';

import WebDesignFeatures from './components/Features/WebDesign_Features';
import ShowcaseImage from '../../Layout/Showcase/Showcase_image';
import WebDesignIntro from './components/Introduction/WebDesign_Intro';
import CONTENTBLOCK from './components/ContentBlock/WebDesign_ContentBlock';
import CTA from './components/CTA/WebDesign_CTA';

import VIDEOPLACEHOLDER from './Video/placeholder.png';

const WebDesign = () => {
  return (
    <>
      <section className={classes.webDesign}>
        <ShowcaseImage
          imgSrc={
            'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_Showcase.mov'
          }
          imgSrc768={
            'https://d3iqs67oyp9328.cloudfront.net/Video/WebDesign/WebDesign_Showcase768.mov'
          }
          placeholderSrc={VIDEOPLACEHOLDER}
          className={classes.webDesign_showcase_video}
        />

        <WebDesignIntro />

        <div className={classes.webDesign_features}>
          <WebDesignFeatures />
        </div>

        <div className={classes.webDesign_ContentBlock}>
          <CONTENTBLOCK />
        </div>

        <div className={classes.webDesign_CTA}>
          <CTA />
        </div>
      </section>
      <div className={classes.webDesign_BottomLine} />
    </>
  );
};

export default WebDesign;
