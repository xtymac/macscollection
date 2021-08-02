import classes from './UnityProject_ContentBlock.module.scss';
import ContentBlock from '../../../../Layout/ContentBlock/ContentBlock';

import CHANGEROOM from '../../image/ChangeRoom.png';
import UNITYEDITOR from '../../image/UnityEditor.png';
import UNIFORM from '../../image/UniformDesign.png';

const UnityProject_ContentBlock = () => {
  const {
    unityPage: {
      CBox_1_title,
      CBox_1_body,
      CBox_2_title,
      CBox_2_body,
      CBox_3_body,
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
      </div>
      <div className={classes.uc_DistanceBetweenNext} />
    </div>
  );
};

export default UnityProject_ContentBlock;
