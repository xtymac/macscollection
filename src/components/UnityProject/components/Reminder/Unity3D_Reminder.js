import classes from './Unity3D_Reminder.module.scss';

const Unity3D_Reminder = () => {
  const {
    unityPage: { Reminder },
  } = window.LANG;

  return (
    <div className={classes.unity3d_reminder}>
      <div className={classes.unity3d_reminder_text}>{Reminder}</div>
    </div>
  );
};

export default Unity3D_Reminder;
