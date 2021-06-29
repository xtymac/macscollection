import classes from './Next.module.scss';
import Blog from '../../image/Blog.png';

const Next = () => {
  return (
    <>
      <div className={classes.wave} />
      <section className={classes.next}>
        <div className={classes.title}>
          <h1>COMING NEXT</h1>
          <h2>Aimily Blog</h2>
          <h3>
            Knowing what we are doing helps <br />
            you do better with our App
          </h3>
        </div>
        <div className={classes.blog}>
          <img src={Blog} alt="Aimily Blog" />
        </div>
      </section>
      <div className={classes.black} />
    </>
  );
};

export default Next;
