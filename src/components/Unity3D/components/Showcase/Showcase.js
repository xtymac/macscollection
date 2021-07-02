import classes from './Showcase.module.scss';
import MLBLOGO from '../../image/MLB_Logo.png';
import SHOWCASE from '../../Video/ShowCase.mp4';

const Showcase = () => {
  return (
    <>
      <div className={classes.showcase}>
        <div className={classes.video}>
          <video
            src={SHOWCASE}
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
          <img src={MLBLOGO} alt="MLB Logo" />
        </div>
      </div>
    </>
  );
};

export default Showcase;
