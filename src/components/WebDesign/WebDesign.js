import classes from './WebDesign.module.scss';

import PLACEHOLDER_IMG from './image/Showcase_Placeholder.png';

import WebDesignFeatures from './components/Features/WebDesign_Features';
import ShowcaseImage from '../../Layout/Showcase/Showcase_image';
import WebDesignIntro from './components/Introduction/WebDesign_Intro';
import CONTENTBLOCK from './components/ContentBlock/WebDesign_ContentBlock';
import CTA from './components/CTA/WebDesign_CTA';

const WebDesign = () => {
  return (
    <>
      <section className={classes.webDesign}>
        <ShowcaseImage imgSrc={PLACEHOLDER_IMG} imgAlt={'Placeholder'} />

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
