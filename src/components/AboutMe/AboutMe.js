import classes from './AboutMe.module.scss';

import PLACEHOLDER_IMG from './image/Showcase_Placeholder.png';

import ContentBlock from './components/ContentBlock/AboutMe_ContentBlock';
import ShowcaseImage from '../../Layout/Showcase/Showcase_image';
import Introduction from './components/Introduction/AboutMe_Introduction';
import HireMe from './components/HireMe/AboutMe_HireMe';

const AboutMe = () => {
  return (
    <>
      <section className={classes.aboutMe}>
        <ShowcaseImage imgSrc={PLACEHOLDER_IMG} imgAlt={'Placeholder'} />

        <Introduction />

        <ContentBlock />

        <HireMe />
      </section>
      <div className={classes.AboutMe_BottomLine} />
    </>
  );
};

export default AboutMe;
