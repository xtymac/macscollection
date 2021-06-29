import classes from './MobileMenuIcon.module.scss';

const MobileMenuIcon = (props) => {
  const styles = `${classes.mobileMenuIcon} ${props.className}`;

  return (
    <>
      <div className={styles} onClick={props.openMenu}>
        <div className={classes['menu__item--meatball']} tabIndex="5">
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
        </div>
      </div>
    </>
  );
};

export default MobileMenuIcon;
