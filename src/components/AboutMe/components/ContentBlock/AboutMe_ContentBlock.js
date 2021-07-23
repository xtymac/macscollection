import classes from './AboutMe_ContentBlock.module.scss';
import ContentBlock from '../../../../Layout/ContentBlock/ContentBlock';

import UIUXDESIGN from '../../image/UIUXDesign.svg';
import PROJECTMANAGEMENT from '../../image/ProjectManagement.svg';
import QUALITY from '../../image/Quality.svg';

const AboutMe_ContentBlock = () => {
  return (
    <div className={classes.aboutMe_ContentBlock}>
      <div className={classes.ac_container}>
        <ContentBlock
          imgSrc={UIUXDESIGN}
          alt={'Illustrate of UIUX Design'}
          className={classes.ac_block_1}
        >
          <div className={classes.ac_block_title}>
            Passing the right culture
          </div>
          <div className={classes.ac_block_description}>
            Over the past four years, I have completed several UIUX research
            projects using primary research, focus group, and both internal and
            external usability testing approaches. Besides extracting results
            from data and analytics, UIUX to me means the passing of a culture
            from a company to its target group.
          </div>
        </ContentBlock>

        <ContentBlock
          imgSrc={PROJECTMANAGEMENT}
          alt={'Illustrate of Time Management'}
          className={classes.ac_block_2}
        >
          <div className={classes.ac_block_title}>Time matters the most</div>
          <div className={classes.ac_block_description}>
            In industries like design and technology, good craft requires a
            significant amount of dedication, whether it is research or
            detailing requiring the most effort. Project management is a mindset
            that helps me to track everything over the entire life cycle of a
            project.
          </div>
        </ContentBlock>

        <ContentBlock
          imgSrc={QUALITY}
          alt={'Illustrate of Hand Made'}
          className={classes.ac_block_3}
        >
          <div className={classes.ac_block_title}>
            Quality equals creativity
          </div>
          <div className={classes.ac_block_description}>
            Inventing a product from scratch and producing a near-perfect
            project hold the same value to me. Having a creative mind does not
            necessarily mean thinking out of the box but instead can refer to
            reinforcing existing concepts in novel ways. Every type of
            craftsmanship holds value in the modern-day marketplace.
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};

export default AboutMe_ContentBlock;
