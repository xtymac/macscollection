import classes from './AboutMe_ContentBlock.module.scss';
import ContentBlock from '../../../../Layout/ContentBlock/ContentBlock';

import UIUXDESIGN from '../../image/UIUXDesign.svg';
import PROJECTMANAGEMENT from '../../image/ProjectManagement.svg';
import QUALITY from '../../image/Quality.svg';

const AboutMe_ContentBlock = () => {
  const {
    aboutMe: {
      CBox_1_title,
      CBox_1_body,
      CBox_2_title,
      CBox_2_body,
      CBox_3_title,
      CBox_3_body,
    },
  } = window.LANG;

  return (
    <div className={classes.aboutMe_ContentBlock}>
      <div className={classes.ac_container}>
        <ContentBlock
          imgSrc={UIUXDESIGN}
          alt={'Illustrate of UIUX Design'}
          className={classes.ac_block_1}
        >
          <div className={classes.ac_block_title}>{CBox_1_title}</div>
          <div className={classes.ac_block_description}>{CBox_1_body}</div>
        </ContentBlock>

        <ContentBlock
          imgSrc={PROJECTMANAGEMENT}
          alt={'Illustrate of Time Management'}
          className={classes.ac_block_2}
        >
          <div className={classes.ac_block_title}>{CBox_2_title}</div>
          <div className={classes.ac_block_description}>{CBox_2_body}</div>
        </ContentBlock>

        <ContentBlock
          imgSrc={QUALITY}
          alt={'Illustrate of Hand Made'}
          className={classes.ac_block_3}
        >
          <div className={classes.ac_block_title}>{CBox_3_title}</div>
          <div className={classes.ac_block_description}>{CBox_3_body}</div>
        </ContentBlock>
      </div>
    </div>
  );
};

export default AboutMe_ContentBlock;
