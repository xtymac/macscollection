import classes from './ReactNative_Header.module.scss';

const ReactNative_Header = (props) => {
  const { mobileApp_Heading1, mobileApp_Heading2 } = window.LANG;

  return (
    <>
      <header className={classes.reactNative_header}>
        <div className={classes.reactNative_title}>
          <div className={classes.ReactNative_title_heading1}>
            {mobileApp_Heading1}
          </div>
          <div className={classes.ReactNative_title_heading2}>
            {mobileApp_Heading2}
          </div>
        </div>
      </header>
    </>
  );
};

export default ReactNative_Header;
