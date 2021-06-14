import classes from './Footer.module.scss';
import SocialMedia from './SocialMedia';

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <SocialMedia />
    </div>
  );
};

export default Footer;
