import classes from './AboutMe_Introduction.module.scss';
import Introduction from '../../../../Layout/Introduction/Introduction';
import AboutMeAvatar from '../../image/AboutMe_Avatar.png';

const AboutMe_Introduction = () => {
  const {
    aboutMe: { Intro },
  } = window.LANG;

  return (
    <div className={classes.ai_Introduction}>
      <div className={classes.ai_Avatar}>
        <div className={classes.ai_Avatar_Container}>
          <img
            className={classes.ai_Avatar_Image}
            src={AboutMeAvatar}
            alt="Avatar"
          />
          <div className={classes.ai_Avatar_Text}>Mac Xiang</div>
        </div>
      </div>
      <Introduction className={classes.ai_Introduction_fix}>
        <div style={{ color: 'white' }}>{Intro}</div>
      </Introduction>
    </div>
  );
};

export default AboutMe_Introduction;
