import classes from './UnityProject.module.scss';

import Unity3DReminder from './components/Reminder/Unity3D_Reminder';
import Unity3DShowcase from './components/Showcase/Unity3D_Showcase';
import Unity3DIntro from './components/Intro/Unity3D_Intro';
import Unity3DFeatures from './components/Features/Unity3D_Features';

const UnityProject = (props) => {
  return (
    <>
      <div className={classes.unity3d}>
        <Unity3DReminder />
        <Unity3DShowcase />
        <Unity3DIntro />
        <Unity3DFeatures />
      </div>
    </>
  );
};

export default UnityProject;
