import { useState } from 'react';

import classes from './ReactLogo.module.scss';

import Sakura from './Sakura';

import SAKURA_FILLED from './sakura_filled.svg';
import SAKURA_UNFILLED from './sakura_unfilled.svg';

import Zoom from 'react-reveal/Zoom';

const ReactLogo = (props) => {
  const [sakuraState, fillSakuraState] = useState(false);

  const sakuraFilledHandler = () => {
    fillSakuraState(true);
  };

  const sakuraUnfilledHandler = () => {
    fillSakuraState(false);
  };

  return (
    <div className={classes.SakuraButton}>
      {!sakuraState && (
        <Sakura imgSrc={SAKURA_UNFILLED} fullFill={sakuraFilledHandler} />
      )}

      {sakuraState && (
        <Zoom duration={800}>
          <Sakura imgSrc={SAKURA_FILLED} fullFill={sakuraUnfilledHandler} />
        </Zoom>
      )}
    </div>
  );
};

export default ReactLogo;
