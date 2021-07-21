import classes from './ReactNative_Header.module.scss';

const ReactNative_Header = (props) => {
  return (
    <>
      <header className={classes.reactNative_header}>
        <div className={classes.reactNative_title}>
          <div className={classes.ReactNative_title_heading1}>
            Goals Made SMART
          </div>
          <div className={classes.ReactNative_title_heading2}>
            Goal setting, progress tracking, accountability, and everything else
            you need to achieve your dreams
          </div>
        </div>
      </header>
    </>
  );
};

export default ReactNative_Header;
