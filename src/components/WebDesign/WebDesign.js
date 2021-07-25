import classes from './WebDesign.module.scss';

import SHOWCASE from './Video/WebDesign_Showcase.mov';

import WebDesignFeatures from './components/Features/WebDesign_Features';
import ShowcaseImage from '../../Layout/Showcase/Showcase_image';
import WebDesignIntro from './components/Introduction/WebDesign_Intro';
import CONTENTBLOCK from './components/ContentBlock/WebDesign_ContentBlock';
import CTA from './components/CTA/WebDesign_CTA';

const WebDesign = () => {
  return (
    <>
      <section className={classes.webDesign}>
        <ShowcaseImage
          imgSrc={SHOWCASE}
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
