import classes from './UnityProject_ContentBlock.module.scss';
import ContentBlock from '../../../../Layout/ContentBlock/ContentBlock';

import CHANGEROOM from '../../image/ChangeRoom.png';
import UNITYEDITOR from '../../image/UnityEditor.png';
import UNIFORM from '../../image/UniformDesign.png';
import PROJECTFLOW from '../../image/ProjectFlow.png';

const UnityProject_ContentBlock = () => {
  const {
    unityPage: {
      CBox_1_title,
      CBox_1_body,
      CBox_2_title,
      CBox_2_body,
      CBox_3_body,
      CBox_4_title,
      CBox_4_body,
      click,
      CBox_4_body_2,
    },
  } = window.LANG;

  return (
    <div className={classes.unityProject_ContentBlock}>
      <div className={classes.uc_container}>
        <ContentBlock
          imgSrc={CHANGEROOM}
          alt={'Image of Changing Room'}
          className={classes.uc_block_1}
        >
          <div className={classes.uc_block_title}>{CBox_1_title}</div>
          <div className={classes.uc_block_description}>{CBox_1_body}</div>
        </ContentBlock>

        <ContentBlock
          imgSrc={UNITYEDITOR}
          alt={'Image of Unity Editor'}
          className={classes.uc_block_2}
        >
          <div className={classes.uc_block_title}>{CBox_2_title}</div>
          <div className={classes.uc_block_description}>{CBox_2_body}</div>
        </ContentBlock>

        <ContentBlock
          imgSrc={UNIFORM}
          alt={'Image of Uniform Design'}
          className={classes.uc_block_3}
        >
          <div className={classes.uc_block_title}>
            MLB <span>x</span> TEAM MAC
          </div>
          <div className={classes.uc_block_description}>{CBox_3_body}</div>
        </ContentBlock>

        <ContentBlock
          imgSrc={PROJECTFLOW}
          alt={'Image of Project Flow'}
          className={classes.uc_block_4}
        >
          <div className={classes.uc_block_title}>{CBox_4_title}</div>
          <div className={classes.uc_block_description}>
            {CBox_4_body}
            <a
              href="https://www.dropbox.com/s/69t0qammddbdvae/Baseball%20101%20Research%20Presentation.pdf?dl=0"
              target="_blank"
              rel="noreferrer"
              className={classes.uc_link}
            >
              {click}
            </a>
            {CBox_4_body_2}
          </div>
        </ContentBlock>
      </div>
      <div className={classes.uc_DistanceBetweenNext} />
    </div>
  );
};

export default UnityProject_ContentBlock;
