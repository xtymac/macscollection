import classes from './ContentBlock.module.scss';

import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';

const ContentBlock = (props) => {
  const styles = `${classes.contentBlock} ${props.className}`;

  return (
    <div className={styles}>
      <Fade bottom>
        <LazyLoad offset={200}>
          <img
            src={props.imgSrc}
            alt={props.imgAlt}
            className={classes.contentBlock_Image}
          />
        </LazyLoad>
        <div className={classes.contentBlock_Text}>{props.children}</div>
        <div className={classes.contentBlock_BottomLine} />
      </Fade>
    </div>
  );
};

export default ContentBlock;
