import classes from './UnityProject_CTA.module.scss';

import CTASLOGAN from '../../../../Layout/CTA/CTA_Slogan';

// Image
import CTABANNER from '../../image/CTA.png';
import TROPHY from '../../image/Trophy.png';

// Library
import LazyLoad from 'react-lazyload';
import Fade from 'react-reveal/Fade';

const UnityProject_CTA = () => {
  return (
    <div className={classes.unityProject_CTA}>
      <div className={classes.uc_container}>
        <div className={classes.uc_Banner}>
          <Fade>
            <LazyLoad offset={200}>
              <img src={CTABANNER} alt="CTA" className={classes.uc_CTA_IMG} />
            </LazyLoad>
          </Fade>
        </div>

        <CTASLOGAN
          cta_Slogan_Img={TROPHY}
          cta_Slogan_Img_Alt={'Trophy'}
          className={classes.up_cta_Slogan}
        >
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
        </CTASLOGAN>
      </div>
    </div>
  );
};

export default UnityProject_CTA;
