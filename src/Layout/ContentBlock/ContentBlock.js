import classes from './ContentBlock.module.scss';

const ContentBlock = (props) => {
  const styles = `${classes.contentBlock} ${props.className}`;

  return (
    <div className={styles}>
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        className={classes.contentBlock_Image}
      />
      <div className={classes.contentBlock_Text}>{props.children}</div>
      <div className={classes.contentBlock_BottomLine} />
    </div>
  );
};

export default ContentBlock;
