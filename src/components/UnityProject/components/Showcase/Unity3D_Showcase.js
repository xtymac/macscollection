import classes from './Unity3D_Showcase.module.scss';
import SHOWCASE from '../../Video/Showcase.mov';
import Unity3DBanner from './Banner/Unity3D_Banner';

const Unity3D_Showcase = () => {
  return (
    <>
      <div className={classes.unity3d_showcase}>
        <video
          className={classes.unity3d_showcase_video}
          src={SHOWCASE}
          onContextMenu={(event) => event.preventDefault()}
          loop
          autoPlay
          muted
          playsInline
        />
      </div>
      <Unity3DBanner />
    </>
  );
};

export default Unity3D_Showcase;
