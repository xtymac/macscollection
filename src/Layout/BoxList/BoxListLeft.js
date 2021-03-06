import classes from './BoxListLeft.module.scss';

import LightSpeed from 'react-reveal/Fade';

import LazyLoad from 'react-lazyload';

const BoxListLeft = (props) => {
  const styles = `${classes.boxListLeft} ${props.className}`;

  return (
    <>
      <li className={styles}>
        <LightSpeed right>
          <LazyLoad height={280} offset={280}>
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
          </LazyLoad>

          <div className={classes.boxListLeft_description}>
            {props.children}
          </div>
        </LightSpeed>
      </li>
    </>
  );
};

export default BoxListLeft;
