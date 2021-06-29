import classes from './Unity3D.module.scss';
import MLBLogo from './IMG/MLB_Logo.png';
import ShowCase from './Video/ShowCase.mp4';

const Unity3D = (props) => {
  return (
    <>
      <div className={classes.reminder}>
        <p>This a student work for demo and portfolio purposes only.</p>
      </div>
      <section className={classes.mlb}>
        <div className={classes.showcase}>
          <div className={classes.background}>
            <video
              src={ShowCase}
              onContextMenu={(event) => event.preventDefault()}
              loop
              autoPlay
              muted
              playsInline
            />
          </div>

          <div className={classes.heading}>
            <h1>BASEBALL</h1>
            <h1>101</h1>
            <h6>Present by</h6>
            <img src={MLBLogo} alt={MLBLogo} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Unity3D;
