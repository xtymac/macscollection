import classes from './BoxList.module.scss';

const BoxList = (props) => {
  return (
    <>
      <li className={classes['box-style']}>
        <div className={classes.video}>
          <video width="380" autoplay="autoplay">
            <source src={props.vsrc} type="video/mp4" />
          </video>
        </div>
        <div className={classes.description}>{props.children}</div>
      </li>
    </>
  );
};

export default BoxList;
