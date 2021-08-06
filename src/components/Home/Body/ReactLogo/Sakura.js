import classes from './Sakura.module.scss';

import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: '#0c0c0d',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const Sakura = (props) => {
  return (
    <LightTooltip
      title={window.location.hash === '#EN' ? '日本語' : 'English'}
      placement="right"
      Style={{ fontSize: ' 40rem' }}
    >
      <div onClick={props.fullFill}>
        <img src={props.imgSrc} className={classes['App-logo']} alt="logo" />
      </div>
    </LightTooltip>
  );
};
export default Sakura;
