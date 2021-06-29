import classes from './Download.module.scss';
import AppStore from '../../../image/AppStore.png';
import DownloadTitle from '../../../image/DownloadTitle.svg';
import AppStoreBadge from '../../../image/Badges/app-store-badge.svg';
import PlayStoreBadge from '../../../image/Badges/google-play-badge.png';

const Download = () => {
  return (
    <>
      <section className={classes.download}>
        <div className={classes.appstore}>
          <img src={AppStore} alt="AppStore ScreenShot" />
        </div>
        <div className={classes.downloadTitle}>
          <img src={DownloadTitle} alt="Download Aimily App Title" />
        </div>
        <div className={classes.badges}>
          <ol>
            <li>
              <img id={classes.google} src={PlayStoreBadge} alt="" />
            </li>
            <li>
              <img id={classes.apple} src={AppStoreBadge} alt="" />
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Download;
