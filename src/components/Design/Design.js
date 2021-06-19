import classes from './Design.module.scss';
import BoxList from './BoxList';

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
              <BoxList>
                <h3>Lorem ipsum dolor sit</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Fermentum pulvinar ultrices.
                </p>
              </BoxList>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Design;
