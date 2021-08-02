import Introduction from '../../../../Layout/Introduction/Introduction';

const ReactNative_Intro = (props) => {
  const {
    mobileApp: { Intro },
  } = window.LANG;

  return (
    <>
      <Introduction>
        <div style={{ color: 'white' }}>{Intro}</div>
      </Introduction>
    </>
  );
};

export default ReactNative_Intro;
