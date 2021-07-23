import classes from './Unity3D_Banner.module.scss';
import GOGGLE from '../../../image/goggle.svg';

const Unity3D_Banner = () => {
  return (
    <>
      <div className={classes.unity3d_banner}>
        <video
          className={classes.unity3d_banner_video}
          src={
            'https://d3iqs67oyp9328.cloudfront.net/Video/UnityProject/Opening.mov'
          }
          onContextMenu={(event) => event.preventDefault()}
          loop
          autoPlay
          muted
          playsInline
          preload
        />
      </div>
      <div className={classes.unity3d_slogan}>
        <div className={classes.unity3d_slogan_text}>
          <p>A Baseball Game Visualization Tool</p>
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
