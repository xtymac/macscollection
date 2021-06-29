import classes from './Features.module.scss';

import Subtitle from '../../../Design/Title/Subtitle';
import BoxListLeft from '../../../Design/BoxList/BoxListLeft';
import BoxListRight from '../../../Design/BoxList/BoxListRight';
import Sample from '../../video/Sample.mp4';
import Download from './Download/Download';
import Next from '../Next/Next';

const Features = () => {
  return (
    <>
      <section className={classes.feature}>
        <div className={classes.container}>
          <Subtitle className={classes.subtitle}>Features</Subtitle>
        </div>

        <div className={classes.boxLists}>
          <ol>
            <BoxListLeft className={classes.boxList} videoSrc={Sample}>
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices.
              </p>
            </BoxListLeft>

            <BoxListRight className={classes.boxList} videoSrc={Sample}>
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices.
              </p>
            </BoxListRight>

            <BoxListLeft className={classes.boxList} videoSrc={Sample}>
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices.
              </p>
            </BoxListLeft>

            <BoxListRight className={classes.boxList} videoSrc={Sample}>
              <h3>Lorem ipsum dolor sit</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fermentum pulvinar ultrices.
              </p>
            </BoxListRight>
          </ol>
        </div>
        <div className={classes.download}>
          <Subtitle className={classes.subtitle}>Download</Subtitle>
          <Download />
        </div>
        <div className={classes.next}>
          <Next />
        </div>
      </section>
    </>
  );
};

export default Features;
