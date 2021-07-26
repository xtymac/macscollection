import classes from './MobileApp_Next.module.scss';
import BLOG from '../../../image/Blog.png';

import Slide from 'react-reveal/Slide';

const MobileApp_Next = () => {
  return (
    <>
      <div className={classes.mobileApp_next_wave} />
      <section className={classes.mobileApp_next}>
        <div className={classes.mobileApp_next_title}>
          <div className={classes.next_title_heading1}>COMING NEXT</div>
          <div className={classes.next_title_heading2}>Aimily Blog</div>
          <div className={classes.next_title_heading3}>
            Knowing what we are doing helps <br />
            you do better with our App
          </div>
        </div>

        <div className={classes.mobileApp_next_blog}>
          <Slide left>
            <img
              className={classes.next_blog_img}
              src={BLOG}
              alt="Aimily Blog"
            />
          </Slide>
        </div>
      </section>
      <div className={classes.mobileApp_next_black} />
    </>
  );
};

export default MobileApp_Next;
