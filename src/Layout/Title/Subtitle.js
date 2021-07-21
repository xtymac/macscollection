import classes from './Subtitle.module.scss';

const Subtitle = (props) => {
  const styles = `${classes.subtitle} ${props.className}`;

  return (
    <>
      <div className={styles}>
        <div className={classes.subtitle_heading}>{props.children}</div>
      </div>
    </>
  );
};

export default Subtitle;
