import classes from './UnityProject_CTA.module.scss';
import CTA from '../../image/CTA.png';
import TROPHY from '../../image/Trophy.png';

const UnityProject_CTA = () => {
  return (
    <div className={classes.unityProject_CTA}>
      <div className={classes.uc_container}>
        <div className={classes.uc_Banner}>
          <img src={CTA} alt="CTA" className={classes.uc_CTA_IMG} />
        </div>
        <div className={classes.uc_Slogan}>
          <img src={TROPHY} alt="Trophy" className={classes.uc_Trophy_IMG} />
          <div className={classes.uc_Slogan_text}>
            <p>Hands on our latest prototype on Unity Play,</p>
            <p>
              get your link &nbsp;
              <a
                href="https://play.unity.com/mg/other/webgl-builds-74032"
                target="_blank"
                rel="noreferrer"
                className={classes.uc_link}
              >
                from here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnityProject_CTA;
