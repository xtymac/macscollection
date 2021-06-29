import classes from './Header.module.scss';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.title}>
          <h1>Goals Made SMART </h1>
          <h2>
            Goal setting, progress tracking, accountability, and everything else
            you need to achieve your dreams
          </h2>
        </div>
      </header>
    </>
  );
};

export default Header;
