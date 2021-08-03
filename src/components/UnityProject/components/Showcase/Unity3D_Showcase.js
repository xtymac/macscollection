import classes from './Unity3D_Showcase.module.scss';
import Unity3DBanner from './Banner/Unity3D_Banner';

import SHOWCASE from '../../image/Showcase.png';
import SHOWCASE768 from '../../image/Showcase768.png';

const Unity3D_Showcase = () => {
  return (
    <>
      <div className={classes.unity3d_showcase}>
        <img
          src={SHOWCASE}
          srcset={`${SHOWCASE768} 768w, ${SHOWCASE} 1280w`}
          alt="Unity3D Showcase"
          className={classes.unity3d_showcase_img}
        />
        {/* <video
          className={classes.unity3d_showcase_video}
          src={
            'https://d3iqs67oyp9328.cloudfront.net/Video/UnityProject/Showcase.mov'
          }
          onContextMenu={(event) => event.preventDefault()}
          loop
          autoPlay
          muted
          playsInline
        /> */}
      </div>

      <Unity3DBanner />
    </>
  );
};

export default Unity3D_Showcase;
