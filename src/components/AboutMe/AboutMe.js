import classes from './AboutMe.module.scss';

import SHOWCASE from './Video/SHOWCASE.mov';

import ContentBlock from './components/ContentBlock/AboutMe_ContentBlock';
import ShowcaseImage from '../../Layout/Showcase/Showcase_image';
import Introduction from './components/Introduction/AboutMe_Introduction';
import HireMe from './components/HireMe/AboutMe_HireMe';
import CTA from './components/CTA/AboutMe_CTA';

const AboutMe = () => {
  return (
    <>
      <section className={classes.aboutMe}>
        <ShowcaseImage
          imgSrc={SHOWCASE}
          className={classes.aboutMe_showcase_video}
          // imgSrc768={SHOWCASE}
          // imgAlt={'Placeholder'}
        />

        <div className={classes.aboutMe_Intro}>
          <Introduction />
        </div>

        <ContentBlock />
        <div className={classes.aboutMe_HireMe}>
          <HireMe />
        </div>
        <div className={classes.aboutMe_CTA}>
          <CTA />
        </div>
      </section>
      <div className={classes.aboutMe_BottomLine} />
    </>
  );
};

export default AboutMe;
