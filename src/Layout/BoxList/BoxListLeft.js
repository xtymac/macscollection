import classes from './BoxListLeft.module.scss';

import LightSpeed from 'react-reveal/Fade';

const BoxListLeft = (props) => {
  const styles = `${classes.boxListLeft} ${props.className}`;

  return (
    <>
      <li className={styles}>
        <LightSpeed right>
          <div className={classes.boxListLeft_video}>
            <video
              src={props.videoSrc}
              onContextMenu={(event) => event.preventDefault()}
              loop
              autoPlay
              muted
              playsInline
              preload
            />
          </div>

          <div className={classes.boxListLeft_description}>
            {props.children}
          </div>
        </LightSpeed>
      </li>
    </>
  );
};

export default BoxListLeft;
