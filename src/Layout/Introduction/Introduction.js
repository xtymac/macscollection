import classes from './Introduction.module.scss';

const Header = (props) => {
  return (
    <>
      <div className={classes.introduction}>
        <div className={classes.introduction_text}>{props.children}</div>
      </div>
    </>
  );
};

export default Header;
