import classes from './MobileApp_Download.module.scss';
import APPSTORE from '../../../image/AppStore.png';
import TITLE from '../../../image/DownloadTitle.svg';
import APPSTOREBADGE from '../../../image/Badges/app-store-badge.svg';
import PLAYSTOREBADGE from '../../../image/Badges/google-play-badge.png';

const MobileApp_Download = () => {
  return (
    <>
      <section className={classes.mobileApp_download}>
        <div className={classes.download_appStore}>
          <img
            className={classes.download_appStore_img}
            src={APPSTORE}
            alt="AppStore ScreenShot"
          />
        </div>
        <div className={classes.download_title}>
          <img
            className={classes.download_title_img}
            src={TITLE}
            alt="Download Aimily App"
          />
        </div>
        <div className={classes.download_badges}>
          <ol className={classes.download_badges_orderList}>
            <li className={classes.download_badges_list}>
              <a
                href="https://play.google.com/store/apps/details?id=app.aimily"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={classes.download_badges_google}
                  src={PLAYSTOREBADGE}
                  alt="Play Store Badge"
                />
              </a>
            </li>
            <li>
              <a
                href="https://apps.apple.com/jp/app/aimily-app/id1565498512?l=en"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={classes.download_badges_apple}
                  src={APPSTOREBADGE}
                  alt="App Store Badge"
                />
              </a>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default MobileApp_Download;
