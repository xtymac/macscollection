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
            In the past four years, I have done various UIUX researches using
            primary research, focus group, internal and external usability
            testing approaches. Besides extracting results from the data and
            analytics, UIUX to me it to pass the most correct culture from a
            company to its target group.
          </div>
        </ContentBlock>

        <ContentBlock
          imgSrc={PROJECTMANAGEMENT}
          alt={'Illustrate of Time Management'}
          className={classes.ac_block_2}
        >
          <div className={classes.ac_block_title}>Time matters the most</div>
          <div className={classes.ac_block_description}>
            In industries like design and technology, good craft usually
            requires a significant amount of dedication. No matter its research
            or detailing that takes the most effort. Project management is like
            a mindset that helps me to track everything since first day of
            scratch.
          </div>
        </ContentBlock>

        <ContentBlock
          imgSrc={QUALITY}
          alt={'Illustrate of Hand Made'}
          className={classes.ac_block_3}
        >
          <div className={classes.ac_block_title}>
            Quality equals to creativity
          </div>
          <div className={classes.ac_block_description}>
            To invent a thing from scratch or produce a nearly perfect project
            has the same value to me. Having a creative mind does not
            necessarily mean thinking out of the box but also reinforcing it.
            Every craftsmanship has its value in 21 century.
          </div>
        </ContentBlock>
      </div>
    </div>
  );
};

export default AboutMe_ContentBlock;
