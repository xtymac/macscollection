import classes from './WebDesign_ContentBlock.module.scss';
import ContentBlock from '../../../../Layout/ContentBlock/ContentBlock';

import SOVM from '../../image/SOVM.png';
import REACT from '../../image/React.png';
import ARCHI from '../../image/Architecture.svg';

const WebDesign_ContentBlock = () => {
  const {
    webDesign: {
      CBox_1_title,
      CBox_1_body,
      CBox_2_title,
      CBox_2_body,
      CBox_3_title,
      CBox_3_body,
    },
  } = window.LANG;

  return (
    <div className={classes.webDesign_ContentBlock}>
      <div className={classes.contentBlock_TopLine} />
      <div className={classes.wc_container}>
        <ContentBlock
          imgSrc={SOVM}
          alt={'Video Marketing 2021'}
          className={classes.wc_block_1}
        >
          <div className={classes.wc_block_title}>{CBox_1_title}</div>
          <div className={classes.wc_block_description}>{CBox_1_body}</div>
        </ContentBlock>

        <ContentBlock
          imgSrc={REACT}
          alt={'Image of VSCode'}
          className={classes.wc_block_2}
        >
          <div className={classes.wc_block_title}>{CBox_2_title}</div>
          <div className={classes.wc_block_description}>{CBox_2_body}</div>
        </ContentBlock>

        <ContentBlock
          imgSrc={ARCHI}
          alt={'Image of Architecture'}
          className={classes.wc_block_3}
        >
          <div className={classes.wc_block_title}>{CBox_3_title}</div>
          <div className={classes.wc_block_description}>{CBox_3_body}</div>
        </ContentBlock>
      </div>
      <div className={classes.wc_DistanceBetweenNext} />
    </div>
  );
};

export default WebDesign_ContentBlock;
