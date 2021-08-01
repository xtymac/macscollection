import Introduction from '../../../../Layout/Introduction/Introduction';

const Unity3D_Intro = () => {
  const { unity_Intro } = window.LANG;

  return (
    <Introduction>
      <div style={{ color: 'white' }}>{unity_Intro}</div>
    </Introduction>
  );
};

export default Unity3D_Intro;
