import classes from './ReactNative_Header.module.scss';

const ReactNative_Header = (props) => {
  const {
    mobileApp: { Heading1, Heading2 },
  } = window.LANG;

  return (
    <>
      <header className={classes.reactNative_header}>
        <div className={classes.reactNative_title}>
          <div className={classes.ReactNative_title_heading1}>{Heading1}</div>
          <div className={classes.ReactNative_title_heading2}>{Heading2}</div>
        </div>
      </header>
    </>
  );
};

export default ReactNative_Header;
