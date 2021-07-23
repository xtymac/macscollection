import classes from './AboutMe_CTA.module.scss';

import React, { Component } from 'react';

import CTASLOGAN from '../../../../Layout/CTA/CTA_Slogan';

const AboutMe_CTA = () => {
  const data = [
    {
      color: '#51c4c2',
      diameter: 90,
      position: {
        left: 180,
        top: 45,
      },
      interval: 1,
      distance: 40,
      step: 7,
    },
    {
      color: '#1fbecf',
      diameter: 350,
      position: {
        left: -100,
        top: 150,
      },
      interval: 1,
      distance: 25,
      step: 5,
    },
    {
      color: '#60c7bc',
      diameter: 170,
      position: {
        left: 300,
        top: 300,
      },
      interval: 1,
      distance: 30,
      step: 8,
    },
    {
      color: '#f47f61',
      diameter: 150,
      position: {
        left: 600,
        top: 150,
      },
      interval: 1,
      distance: 20,
      step: 5,
    },
    {
      color: '#f05572',
      diameter: 60,
      position: {
        left: 510,
        top: 170,
      },
      interval: 1,
      distance: 25,
      step: 6,
    },
    {
      color: '#f1666e',
      diameter: 100,
      position: {
        left: 535,
        top: 50,
      },
      interval: 1,
      distance: 10,
      step: 3,
    },
  ];

  class MovingPart extends React.Component {
    constructor(props) {
      super(props);

      this.maxRotate = 55;
      this.deg = +(Math.random() * 360).toFixed();
      this.state = { x: 0, y: 0 };
    }

    componentDidMount() {
      const { interval, distance, step } = this.props;
      const { maxRotate, getShift } = this;

      setInterval(() => {
        this.setState((prevState) => {
          this.deg += +(Math.random() * maxRotate * 2 - maxRotate).toFixed();
          let shift = getShift(this.deg, step);
          while (
            Math.abs(prevState.x + shift.x) >= distance ||
            Math.abs(prevState.y + shift.y) >= distance
          ) {
            this.deg += +(Math.random() * maxRotate * 2 - maxRotate).toFixed();
            shift = getShift(this.deg, step);
          }
          return {
            x: prevState.x + shift.x,
            y: prevState.y + shift.y,
          };
        });
      }, interval * 1000);
    }

    getShift = (deg, step) => {
      return {
        x: +(Math.cos((deg * Math.PI) / 180) * step).toFixed(),
        y: +(Math.sin((deg * Math.PI) / 180) * step).toFixed(),
      };
    };

    render() {
      const { interval, children } = this.props;
      const { x, y } = this.state;

      return (
        <div
          style={{
            transform: `translate(${x}px,${y}px)`,
            transition: `transform ${interval}s linear`,
            'backface-visibility': 'hidden',
          }}
        >
          {children}
        </div>
      );
    }
  }

  return (
    <div className={classes.webDesign_CTA}>
      <div className={classes.wd_container}>
        <div className="container">
          {data.map((item) => (
            <div
              className="part"
              style={{
                left: `${item.position.left}px`,
                top: `${item.position.top}px`,
              }}
            >
              <MovingPart
                interval={item.interval}
                distance={item.distance}
                step={item.step}
              >
                <div
                  className="part__figure"
                  style={{
                    background: item.color,
                    width: `${item.diameter}px`,
                    height: `${item.diameter}px`,
                    borderLeft: `${item.diameter}px`,
                  }}
                />
              </MovingPart>
            </div>
          ))}
        </div>

        {/* <CTASLOGAN
          cta_Slogan_Img={OCTOCAT}
          cta_Slogan_Img_Alt={'GitHub Octocat'}
          className={classes.wd_cta_Slogan}
        >
          <p>View source code of this portfolio,</p>
          <p>
            get your link &nbsp;
            <a
              href="https://github.com/xtymac/macscollection"
              target="_blank"
              rel="noreferrer"
              className={classes.wd_link}
            >
              from here.
            </a>
          </p>
        </CTASLOGAN> */}
      </div>
    </div>
  );
};

export default AboutMe_CTA;
