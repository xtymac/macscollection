import Introduction from '../../../../Layout/Introduction/Introduction';

const Unity3D_Intro = () => {
  const {
    unityPage: { Intro },
  } = window.LANG;

  return (
    <Introduction>
      <div style={{ color: 'white' }}>{Intro}</div>
    </Introduction>
  );
};

export default Unity3D_Intro;
