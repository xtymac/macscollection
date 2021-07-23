import classes from './WebDesign_CTA.module.scss';

import CTASLOGAN from '../../../../Layout/CTA/CTA_Slogan';

import OCTOCAT from '../../image/Octocat.png';

const WebDesign_CTA = () => {
  return (
    <div className={classes.webDesign_CTA}>
      <div className={classes.wd_container}>
        <CTASLOGAN
          cta_Slogan_Img={OCTOCAT}
          cta_Slogan_Img_Alt={'GitHub Octocat'}
          className={classes.wd_cta_Slogan}
        >
          <p>View source code of this portfolio,</p>
          <p>
            get your link &nbsp;
            <a
              href="https://github.com/xtymac/macscollection"
              target="_blank"
              rel="noreferrer"
              className={classes.wd_link}
            >
              from here.
            </a>
          </p>
        </CTASLOGAN>
      </div>
    </div>
  );
};

export default WebDesign_CTA;
