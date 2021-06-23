import classes from './BoxListLeft.module.scss';

const BoxListLeft = (props) => {
  const styles = `${classes.boxList} ${props.className}`;

  return (
    <>
      <li className={styles}>
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

        <div className={classes.description}>{props.children}</div>
      </li>
    </>
  );
};

export default BoxListLeft;
