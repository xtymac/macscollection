import classes from './Introduction.module.scss';

const Header = (props) => {
  const styles = `${classes.introduction} ${props.className}`;

  return (
    <>
      <div className={styles}>
        <div className={classes.introduction_text}>{props.children}</div>
      </div>
    </>
  );
};

export default Header;
