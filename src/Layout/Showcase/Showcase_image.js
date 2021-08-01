import classes from './Showcase_image.module.scss';

const Showcase_image = (props) => {
  const videoStyle = `${classes.showcase_video} ${props.className}`;

  return (
    <>
      <div className={classes.showcase_image}>
        <div className={classes.si_container}>
          {/* <img
            className={classes.si_container_img}
            src={props.imgSrc}
            alt={props.imgAlt}
          /> */}
          <video
            className={videoStyle}
            src={props.imgSrc}
            srcset={`${props.imgSrc768} 768w, ${props.imgSrc} 1280w`}
            onContextMenu={(event) => event.preventDefault()}
            loop
            autoPlay
            muted
            playsInline
            preload="true"
            poster={props.placeholderSrc}
          >
            Loading the video...
          </video>
        </div>
      </div>
    </>
  );
};

export default Showcase_image;
