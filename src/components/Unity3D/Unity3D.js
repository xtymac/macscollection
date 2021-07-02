import classes from './Unity3D.module.scss';
import Showcase from './components/Showcase/Showcase';
import Banner from './components/Showcase/Banner';

const Unity3D = (props) => {
  return (
    <>
      <div className={classes.reminder}>
        <p>This project is for demo and potfolio purpose only</p>
      </div>
      <section className={classes.mlb}>
        <Showcase />
        <Banner />
      </section>
    </>
  );
};

export default Unity3D;
