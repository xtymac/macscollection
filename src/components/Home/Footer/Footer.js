import classes from './Footer.module.scss';

import FIGMA from './Icons/Figma.svg';
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
              <a
                href="https://www.figma.com/file/R4GmdwrGEM65goAL2OjoQ6/Mac-s-Collection?node-id=1219%3A6388"
                target="_blank"
                rel="noopener noreferrer"
                alt="Figma"
              >
                <img src={FIGMA} alt="Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://macxiang.notion.site/Mac-s-Collection-71a7e302db5b442d8fcde943d6abd79d"
                target="_blank"
                rel="noopener noreferrer"
                alt="Notion"
              >
                <img src={notion} alt="Notion" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/macxiang/"
                target="_blank"
                rel="noopener noreferrer"
                alt="LinkedIn"
              >
                <img src={linkedIn} alt="linkedIn" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/xtymac/macscollection"
                target="_blank"
                rel="noopener noreferrer"
                alt="GitHub"
              >
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
