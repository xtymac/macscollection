import classes from './Body.module.scss';
import slogan from './slogan.png';
import ReactLogo from './ReactLogo/ReactLogo';

const Body = () => {
  return (
    <>
      <section className={classes.body}>
        <div className={classes.slogan}>
          <img id="slide" src={slogan} alt="slogan" />
        </div>
        <div className={classes.logo}>
          <ReactLogo />
        </div>
      </section>
    </>
  );
};

export default Body;
