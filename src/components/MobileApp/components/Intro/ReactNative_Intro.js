import Introduction from '../../../../Layout/Introduction/Introduction';

const ReactNative_Intro = (props) => {
  const { mobileApp_Intro } = window.LANG;

  return (
    <>
      <Introduction>
        <div style={{ color: 'white' }}>{mobileApp_Intro}</div>
      </Introduction>
    </>
  );
};

export default ReactNative_Intro;
