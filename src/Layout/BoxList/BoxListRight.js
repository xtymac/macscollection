import classes from './BoxListRight.module.scss';

const BoxListRight = (props) => {
  const styles = `${classes.boxListRight} ${props.className}`;

  return (
    <>
      <li className={styles}>
        <div className={classes.boxListRight_description}>{props.children}</div>

        <div className={classes.boxListRight_video}>
          <video
            src={props.videoSrc}
            onContextMenu={(event) => event.preventDefault()}
            loop
            autoPlay
            muted
            playsInline
          />
        </div>
      </li>
    </>
  );
};

export default BoxListRight;
