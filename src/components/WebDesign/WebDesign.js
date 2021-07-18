import classes from './WebDesign.module.scss';
import WebDesignFeatures from './components/Features/WebDesign_Features';
import WebDesignShowcase from './components/Showcase/WebDesign_Showcase';
import WebDesignIntro from './components/Intro/WebDesign_Intro';

const WebDesign = () => {
  return (
    <>
      <section className={classes.webDesign}>
        <WebDesignShowcase />

        <WebDesignIntro />

        <section className={classes.webDesign_features}>
          <WebDesignFeatures />
        </section>
      </section>
    </>
  );
};

export default WebDesign;
