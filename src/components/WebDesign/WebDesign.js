import classes from './WebDesign.module.scss';

import PLACEHOLDER_IMG from './image/Showcase_Placeholder.png';

import WebDesignFeatures from './components/Features/WebDesign_Features';
import ShowcaseImage from '../../Layout/Showcase/Showcase_image';
import WebDesignIntro from './components/Introduction/WebDesign_Intro';

const WebDesign = () => {
  return (
    <>
      <section className={classes.webDesign}>
        <ShowcaseImage imgSrc={PLACEHOLDER_IMG} imgAlt={'Placeholder'} />

        <WebDesignIntro />

        <section className={classes.webDesign_features}>
          <WebDesignFeatures />
        </section>
      </section>
      <div className={classes.webDesign_BottomLine} />
    </>
  );
};

export default WebDesign;
