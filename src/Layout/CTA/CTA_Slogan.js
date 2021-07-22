import classes from './CTA_Slogan.module.scss';

const CTA_Slogan = (props) => {
  const imgStyle = `${props.className}`;

  return (
    <div className={classes.cta_Slogan}>
      <img
        src={props.cta_Slogan_Img}
        alt={props.cta_Slogan_Img_Alt}
        className={imgStyle}
      />
      <div className={classes.cta_Slogan_text}>{props.children}</div>
    </div>
  );
};

export default CTA_Slogan;