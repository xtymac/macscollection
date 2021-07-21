import classes from './Showcase_image.module.scss';

const Showcase_image = (props) => {
  const styles = `${classes.showcase_image} ${classes.className}`;

  return (
    <>
      <div className={styles}>
        <div className={classes.si_container}>
          <img
            className={classes.si_container_img}
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </div>
      </div>
    </>
  );
};

export default Showcase_image;
