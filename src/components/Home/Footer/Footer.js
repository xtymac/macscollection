import classes from './Footer.module.scss';

import facebook from './Icons/Facebook.svg';
import notion from './Icons/Notion.svg';
import linkedIn from './Icons/LinkedIn.svg';
import gitHub from './Icons/GitHub.svg';

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <section className={classes.section}>
        <div className={classes.social}>
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
        </div>
        <div className={classes.copyright}>
          <p>Copyright &copy; 2021  Mac’s Collection</p>
          <p>All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
