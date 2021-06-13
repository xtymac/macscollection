import classes from './Body.module.scss';

const Body = (props) => {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.slogan}>
          <p className={classes.diem}>Diem</p>
          <p className={classes.carpe}>
            Carpe<span>.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
