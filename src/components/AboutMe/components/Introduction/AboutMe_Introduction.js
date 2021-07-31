import classes from './AboutMe_Introduction.module.scss';
import Introduction from '../../../../Layout/Introduction/Introduction';
import AboutMeAvatar from '../../image/AboutMe_Avatar.png';

const AboutMe_Introduction = () => {
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
        <div style={{ color: 'white' }}>
          I am a web designer living in Tokyo, Japan. I perform web development,
          front-end design, and usability research. I am currently searching for
          a new opportunity in the tech industry. I have full professional
          proficiency in English, Japanese, Chinese, and I am eager to work in a
          diversified environment. I am familiar with HTML, CSS, JavaScript,
          AWS, and Unity, which I use to help build a better web experience for
          users from different backgrounds.
        </div>
      </Introduction>
    </div>
  );
};

export default AboutMe_Introduction;
