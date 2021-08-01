import classes from './Unity3D_Reminder.module.scss';

const Unity3D_Reminder = () => {
  const { unity_Reminder } = window.LANG;

  return (
    <div className={classes.unity3d_reminder}>
      <div className={classes.unity3d_reminder_text}>{unity_Reminder}</div>
    </div>
  );
};

export default Unity3D_Reminder;
