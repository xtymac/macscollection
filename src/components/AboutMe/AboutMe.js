import classes from './AboutMe.module.scss';

import PLACEHOLDER_IMG from './image/Showcase_Placeholder.png';

import ContentBlock from './components/ContentBlock/AboutMe_ContentBlock';
import ShowcaseImage from '../../Layout/Showcase/Showcase_image';
import Introduction from './components/Introduction/AboutMe_Introduction';
import HireMe from './components/HireMe/AboutMe_HireMe';
import CTA from './components/CTA/AboutMe_CTA';

import LazyLoad from 'react-lazyload';

const AboutMe = () => {
  return (
    <>
      <section className={classes.aboutMe}>
        <ShowcaseImage imgSrc={PLACEHOLDER_IMG} imgAlt={'Placeholder'} />

        <Introduction />

        <ContentBlock />
        <div className={classes.aboutMe_HireMe}>
          <HireMe />
        </div>
        <div className={classes.aboutMe_CTA}>
          <LazyLoad height={300}>
            <CTA />
          </LazyLoad>
        </div>
      </section>
      <div className={classes.aboutMe_BottomLine} />
    </>
  );
};

export default AboutMe;
