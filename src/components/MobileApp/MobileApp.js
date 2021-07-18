import classes from './MobileApp.module.scss';
import ReactNativeHeader from './components/Header/ReactNative_Header';
import ReactNativeShowcase from './components/Showcase/ReactNative_Showcase';
import ReactNativeIntro from './components/Intro/ReactNative_Intro';
import MobileAppFeatures from './components/Features/MobileApp_Features';

const MobileApp = (props) => {
  return (
    <>
      <ReactNativeHeader />
      <ReactNativeShowcase />
      <ReactNativeIntro />
      <MobileAppFeatures />
    </>
  );
};

export default MobileApp;
