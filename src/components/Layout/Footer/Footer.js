import classes from './Footer.module.scss';

import facebook from '../../../assets/Logo/SocialMedia/Facebook.svg';
import notion from '../../../assets/Logo/SocialMedia/Notion.svg';
import linkedIn from '../../../assets/Logo/SocialMedia/LinkedIn.svg';
import gitHub from '../../../assets/Logo/SocialMedia/GitHub.svg';

import Fade from './Fade';

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <section className={classes.social}>
        <ul>
          <li>
            <a href="#" alt="facebook">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#" alt="notion">
              <img src={notion} alt="notion" />
            </a>
          </li>
          <li>
            <a href="#" alt="linkedIn">
              <img src={linkedIn} alt="linkedIn" />
            </a>
          </li>
          <li>
            <a href="#" alt="gitHub">
              <img src={gitHub} alt="gitHub" />
            </a>
          </li>
        </ul>
      </section>

      <section className={classes.copyright}>
        <p>Copyright &copy; 2021  Mac’s Collection</p>
        <p>All rights reserved.</p>
        <Fade />
      </section>
    </footer>
  );
};

export default Footer;
