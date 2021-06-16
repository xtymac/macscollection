import classes from './Design.module.scss';
import Placeholder from './Placeholder.svg';

const Design = (props) => {
  return (
    <>
      <section className={classes.design}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h2>Lorem ipsum</h2>
          </div>
          <div className={classes.content}>
            <ol>
              <li>
                <div className={classes.video}>
                  <img src={Placeholder} alt="placeholder" />
                </div>
                <div className={classes.description}>
                  <h3>Lorem ipsum dolor sit</h3>
                  <div className={classes.blurb}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fermentum pulvinar ultrices.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Design;
