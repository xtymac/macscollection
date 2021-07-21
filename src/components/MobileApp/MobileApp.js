import classes from './MobileApp.module.scss';
import Header from './components/Header/ReactNative_Header';
import Showcase from './components/Showcase/ReactNative_Showcase';
import Introduction from './components/Intro/ReactNative_Intro';
import Features from './components/Features/MobileApp_Features';

const MobileApp = (props) => {
  return (
    <>
      <Header />
      <Showcase />
      <Introduction />
      <Features />
    </>
  );
};

export default MobileApp;
