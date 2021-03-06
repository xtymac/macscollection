import classes from './Unity3D_Banner.module.scss';
import GOGGLE from '../../../image/goggle.svg';

import VIDEOPLACEHOLDER from '../../../Video/placeholder.png';

const Unity3D_Banner = () => {
  const {
    unityPage: { Slogan },
  } = window.LANG;

  const OPENING =
    'https://d3iqs67oyp9328.cloudfront.net/Video/UnityProject/Opening.mov';
  const OPENING768 =
    'https://d3iqs67oyp9328.cloudfront.net/Video/UnityProject/Opening768.mov';

  return (
    <>
      <div className={classes.unity3d_banner}>
        <video
          className={classes.unity3d_banner_video}
          src={OPENING}
          srcset={`${OPENING768} 768w, ${OPENING} 1280w`}
          onContextMenu={(event) => event.preventDefault()}
          loop
          autoPlay
          muted
          playsInline
          preload="true"
          poster={VIDEOPLACEHOLDER}
        />
      </div>
      <div className={classes.unity3d_slogan}>
        <div className={classes.unity3d_slogan_text}>
          <p>{Slogan}</p>
        </div>
        <div className={classes.unity3d_slogan_goggle}>
          <img
            class={classes.unity3d_slogan_goggle_img}
            src={GOGGLE}
            alt="VR Goggle"
          />
        </div>
      </div>
      ;
    </>
  );
};

export default Unity3D_Banner;
