import classes from './SocialMedia.module.scss';
import facebook from '../../../assets/Logo/SocialMedia/Facebook.svg';
import notion from '../../../assets/Logo/SocialMedia/Notion.svg';
import linkedIn from '../../../assets/Logo/SocialMedia/LinkedIn.svg';
import gitHub from '../../../assets/Logo/SocialMedia/GitHub.svg';

const SocialMedia = (props) => {
  return (
    <div className={classes.social}>
      <ul>
        <li>
          <img src={facebook} alt="facebook" />
        </li>
        <li>
          <img src={notion} alt="notion" />
        </li>
        <li>
          <img src={linkedIn} alt="linkedIn" />
        </li>
        <li>
          <img src={gitHub} alt="gitHub" />
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
