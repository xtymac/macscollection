import classes from './BoxListLeft.module.scss';

const BoxListLeft = (props) => {
  const styles = `${classes.boxListLeft} ${props.className}`;

  return (
    <>
      <li className={styles}>
        <div className={classes.boxListLeft_video}>
          <video
            src={props.videoSrc}
            onContextMenu={(event) => event.preventDefault()}
            loop
            autoPlay
            muted
            playsInline
          />
        </div>

        <div className={classes.boxListLeft_description}>{props.children}</div>
      </li>
    </>
  );
};

export default BoxListLeft;
