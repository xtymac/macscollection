import classes from './Design.module.scss';
import Subtitle from './Title/Subtitle';
import BoxListLeft from './BoxList/BoxListLeft';
import BoxListRight from './BoxList/BoxListRight';
import Sample from './Video/Sample.mp4';

const Design = () => {
  return (
    <>
      <section className={classes.design}>
        <div className={classes.container}>
          <Subtitle className={classes.subtitle}>Features</Subtitle>
          <div className={classes.boxLists}>
            <ol>
              <BoxListLeft className={classes.boxList} videoSrc={Sample}>
                <h3>Lorem ipsum dolor sit</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fermentum pulvinar ultrices. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Fermentum pulvinar ultrices.
                </p>
              </BoxListLeft>

              <BoxListRight className={classes.boxList} videoSrc={Sample}>
                <h3>Lorem ipsum dolor sit</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fermentum pulvinar ultrices. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Fermentum pulvinar ultrices.
                </p>
              </BoxListRight>

              <BoxListLeft className={classes.boxList} videoSrc={Sample}>
                <h3>Lorem ipsum dolor sit</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fermentum pulvinar ultrices. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Fermentum pulvinar ultrices.
                </p>
              </BoxListLeft>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Design;
