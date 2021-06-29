import classes from './Introduction.module.scss';

const Header = (props) => {
  return (
    <>
      <section className={classes.introduction}>
        <div className={classes.text}>
          <p>
            Aimily is a SMART goal-setting App. It allows users to break down
            one task into multiple steps. It reminds users to follow the SMART
            goal principle that is specific, measurable, attainable, relevant,
            and time-bound throughout the task breakdown process. I am working
            as a front-end designer in Team Aimily. My teammate and I have
            implemented a goal view screen that displays the progress of task
            completion visually. I am also in charge of the App Store and Play
            Store designs for the App and the upcoming blog page for Aimily's
            web application.
          </p>
        </div>
      </section>
    </>
  );
};

export default Header;
