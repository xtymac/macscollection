import classes from './Logo.module.scss';

const Logo = (props) => {
  const styles = `${classes.logo} ${props.className}`;

  return (
    <div id="logo" className={styles}>
      <a href="#">Mac's Collection</a>
    </div>
  );
};

export default Logo;
