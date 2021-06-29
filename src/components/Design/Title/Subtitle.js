import classes from './Subtitle.module.scss';

const Subtitle = (props) => {
  const styles = `${classes.subtitle} ${props.className}`;

  return (
    <>
      <div className={styles}>
        <h2>{props.children}</h2>
      </div>
    </>
  );
};

export default Subtitle;
