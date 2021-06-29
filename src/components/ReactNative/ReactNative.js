import classes from './ReactNative.module.scss';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import Introduction from './components/Introduction/Introduction';
import Features from './components/Features/Features';

const ReactNative = (props) => {
  return (
    <>
      <Header />
      <Showcase />
      <Introduction />
      <Features />
    </>
  );
};

export default ReactNative;
