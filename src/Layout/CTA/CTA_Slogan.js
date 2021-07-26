import classes from './CTA_Slogan.module.scss';

const CTA_Slogan = (props) => {
  const styles = `${classes.cta_Slogan} ${props.className}`;

  return (
    <div className={styles}>
      <img src={props.cta_Slogan_Img} alt={props.cta_Slogan_Img_Alt} />
      <div className={classes.cta_Slogan_text}>{props.children}</div>
    </div>
  );
};

export default CTA_Slogan;
