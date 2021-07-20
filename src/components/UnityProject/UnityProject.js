import classes from './UnityProject.module.scss';

import Reminder from './components/Reminder/Unity3D_Reminder';
import Showcase from './components/Showcase/Unity3D_Showcase';
import Introduction from './components/Intro/Unity3D_Intro';
import Features from './components/Features/Unity3D_Features';
import ContentBlock from './components/ContentBlock/UnityProject_ContentBlock';
import CTA from './components/CTA/UnityProject_CTA';

const UnityProject = (props) => {
  return (
    <>
      <div className={classes.unity3d}>
        <Reminder />
        <Showcase />
        <Introduction />
        <Features />
        <ContentBlock />
        <CTA />
      </div>
      <div className={classes.UnityProject_BottomLine} />
    </>
  );
};

export default UnityProject;
