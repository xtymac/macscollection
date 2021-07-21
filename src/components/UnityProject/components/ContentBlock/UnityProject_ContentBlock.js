import classes from './UnityProject_ContentBlock.module.scss';
import ContentBlock from '../../../../Layout/ContentBlock/ContentBlock';

import CHANGEROOM from '../../image/ChangeRoom.png';
import UNITYEDITOR from '../../image/UnityEditor.png';
import UNIFORM from '../../image/UniformDesign.png';

const UnityProject_ContentBlock = () => {
  return (
    <div className={classes.unityProject_ContentBlock}>
      <div className={classes.uc_container}>
        <ContentBlock
          imgSrc={CHANGEROOM}
          alt={'Image of Changing Room'}
          className={classes.uc_block_1}
        >
          <div className={classes.uc_block_title}>
            Working with professional assets
          </div>
          <div className={classes.uc_block_description}>
            It is made possible to build a baseball primer with animated players
            and professional assets. More importantly, this project aims to call
            for entries to those actual game players, baseball enthusiasts, and
            typical sportspeople.
          </div>
        </ContentBlock>

        <ContentBlock
          imgSrc={UNITYEDITOR}
          alt={'Image of Unity Editor'}
          className={classes.uc_block_2}
        >
          <div className={classes.uc_block_title}>
            Timeline and cinematic shots
          </div>
          <div className={classes.uc_block_description}>
            The opening of the project is a cutscene in which users are able to
            overlook the stadium. The following is a close-up shot on the player
            and a dolly zoom after the ball is pitched. All those clips form the
            opening, and they are composed within one Timeline.
          </div>
        </ContentBlock>

        <ContentBlock
          imgSrc={UNIFORM}
          alt={'Image of Uniform Design'}
          className={classes.uc_block_3}
        >
          <div className={classes.uc_block_title}>
            MLB <span>x</span> TEAM MAC
          </div>
          <div className={classes.uc_block_description}>
            The uniform design is taking 21st-century baseball player clothing
            as a reference. By adding the brand logo, it makes the player and
            group spirit shine on the baseball field.
          </div>
        </ContentBlock>
      </div>
      <div className={classes.uc_DistanceBetweenNext} />
    </div>
  );
};

export default UnityProject_ContentBlock;
