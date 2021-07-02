import classes from './BoxListRight.module.scss';

const BoxListRight = (props) => {
  const styles = `${classes.boxList} ${props.className}`;

  return (
    <>
      <li className={styles}>
        <div className={classes.description}>{props.children}</div>

        <div className={classes.video}>
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
