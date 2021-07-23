import classes from './AboutMe_HireMe.module.scss';
import JAPAN from '../../image/Japan.svg';
import LINKEDINLOGO from '../../image/LinkedIn_Logo.png';

import Fade from 'react-reveal/Fade';

const AboutMe_HireMe = () => {
  return (
    <div className={classes.aboutMe_HireMe}>
      <Fade>
        <div className={classes.ah_container}>
          <a
            href="https://www.linkedin.com/in/macxiang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.ah_text}>
              <div className={classes.ah_title}>Hire me</div>
              <div className={classes.ah_subtitle}>Base in Japan</div>
            </div>

            <img
              src={LINKEDINLOGO}
              alt="LinkedIn Logo"
              className={classes.ah_LinkedIn}
            />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default AboutMe_HireMe;
