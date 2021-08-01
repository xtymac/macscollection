import Introduction from '../../../../Layout/Introduction/Introduction';

const WebDesign_Intro = () => {
  const { webDesign_Intro } = window.LANG;

  return (
    <Introduction>
      <div style={{ color: 'black' }}>{webDesign_Intro}</div>
    </Introduction>
  );
};

export default WebDesign_Intro;
