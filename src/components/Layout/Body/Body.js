import React from 'react';

import classes from './Body.module.scss';
import Slogan from './Slogan/Slogan.svg';
import SloganJP from './Slogan/SloganJP.svg';
import SloganCN from './Slogan/SloganCN.svg';
import ReactLogo from './ReactLogo/ReactLogo';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [Slogan, SloganJP, SloganCN],
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 3000);
  }

  render() {
    return (
      <section className={classes.body}>
        <div className={classes.slogan}>
          <img
            src={this.state.images[this.state.currentImage]}
            alt="cleaning images"
          />
          {/* <img src={Slogan} alt="slogan" />
          <img src={SloganJP} alt="SloganJP" /> */}
        </div>
        <div className={classes.logo}>
          <ReactLogo />
        </div>
      </section>
    );
  }
}

export default Body;
