import { useState } from 'react';

import classes from './ReactLogo.module.scss';

import Sakura from './Sakura';

import SAKURA_FILLED from './sakura_filled.svg';
import SAKURA_UNFILLED from './sakura_unfilled.svg';

import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';

const ReactLogo = (props) => {
  const [sakuraState, fillSakuraState] = useState(
    window.location.hash === '#JP'
  );

  const sakuraFilledHandler = () => {
    fillSakuraState(true);
    window.location.hash = `#JP`;
    window.location.reload();
  };

  const sakuraUnfilledHandler = () => {
    fillSakuraState(false);
    window.location.hash = `#EN`;
    window.location.reload();
  };

  return (
    <div className={classes.SakuraButton}>
      <Zoom duration={800}>
        <Pulse delay={1000} duration={500} count={2}>
          <Sakura
            imgSrc={sakuraState ? SAKURA_FILLED : SAKURA_UNFILLED}
            fullFill={sakuraState ? sakuraUnfilledHandler : sakuraFilledHandler}
          />
        </Pulse>
      </Zoom>
    </div>
  );
};

export default ReactLogo;
