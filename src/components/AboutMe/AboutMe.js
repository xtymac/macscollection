import classes from './AboutMe.module.scss';

import ContentBlock from './components/ContentBlock/AboutMe_ContentBlock';
import ShowcaseImage from '../../Layout/Showcase/Showcase_image';
import Introduction from './components/Introduction/AboutMe_Introduction';
import HireMe from './components/HireMe/AboutMe_HireMe';
import CTA from './components/CTA/AboutMe_CTA';

const AboutMe = () => {
  return (
    <>
      <section className={classes.aboutMe}>
        {/* <ShowcaseImage
          imgSrc={
            'https://d3iqs67oyp9328.cloudfront.net/Video/AboutMe/AboutMe_Showcase.mov'
          }
          imgSrc768={
            'https://d3iqs67oyp9328.cloudfront.net/Video/AboutMe/AboutMe_Showcase768.mov'
          }
          className={classes.aboutMe_showcase_video}
        /> */}

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
