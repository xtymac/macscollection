import classes from './WebDesign_ContentBlock.module.scss';
import ContentBlock from '../../../../Layout/ContentBlock/ContentBlock';

import SOVM from '../../image/SOVM.png';
import REACT from '../../image/React.png';
import ARCHI from '../../image/Architecture.svg';

const WebDesign_ContentBlock = () => {
  return (
    <div className={classes.webDesign_ContentBlock}>
      <div className={classes.contentBlock_TopLine} />
      <div className={classes.wc_container}>
        <ContentBlock
          imgSrc={SOVM}
          alt={'Video Marketing 2021'}
          className={classes.wc_block_1}
        >
          <div className={classes.wc_block_title}>Video as the mainstream</div>
          <div className={classes.wc_block_description}>
            This portfolio is utilizing video as the main demonstration tool.
            Video content has become the mainstream media for businesses to do
            marketing online; according to the research from Wyzowl, its
            dominance comes to 86% in the year 2021.
          </div>
        </ContentBlock>

        <ContentBlock
          imgSrc={REACT}
          alt={'Image of VSCode'}
          className={classes.wc_block_2}
        >
          <div className={classes.wc_block_title}>
            Practice the React features
          </div>
          <div className={classes.wc_block_description}>
            The underlying framework of this project is React.js which has
            features such as component base, high efficiency, and so much more.
            Combined with the CSS module, I am able to build UI within the scope
            without worrying about tedious file management.
          </div>
        </ContentBlock>

        <ContentBlock
          imgSrc={ARCHI}
          alt={'Image of Architecture'}
          className={classes.wc_block_3}
        >
          <div className={classes.wc_block_title}>Deployment to the cloud</div>
          <div className={classes.wc_block_description}>
            Using AWS Amplify, this project is built and deployed on the cloud.
            The CloudFront content delivery network has the potential to serve a
            large amount of traffic. And last but least, Router 53 is in charge
            of the DNS service.
          </div>
        </ContentBlock>
      </div>
      <div className={classes.wc_DistanceBetweenNext} />
    </div>
  );
};

export default WebDesign_ContentBlock;
