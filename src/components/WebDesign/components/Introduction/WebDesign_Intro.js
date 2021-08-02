import Introduction from '../../../../Layout/Introduction/Introduction';

const WebDesign_Intro = () => {
  const {
    webDesign: { Intro },
  } = window.LANG;

  return (
    <Introduction>
      <div style={{ color: 'black' }}>{Intro}</div>
    </Introduction>
  );
};

export default WebDesign_Intro;
