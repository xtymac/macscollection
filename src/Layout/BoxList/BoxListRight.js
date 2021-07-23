import classes from './BoxListRight.module.scss';

import LightSpeed from 'react-reveal/Fade';

const BoxListRight = (props) => {
  const styles = `${classes.boxListRight} ${props.className}`;

  return (
    <>
      <li className={styles}>
        <LightSpeed left>
          <div className={classes.boxListRight_description}>
            {props.children}
          </div>

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
        </LightSpeed>
      </li>
    </>
  );
};

export default BoxListRight;
