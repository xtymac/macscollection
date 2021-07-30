import classes from './AboutMe_CTA.module.scss';

import React, { Component } from 'react';

import CTASlogan from '../../../../Layout/CTA/CTA_Slogan';

import CTAICON from '../../image/CTA_Icon.svg';

const AboutMe_CTA = () => {
  const data = [
    {
      // Blue
      diameter: 0,
      borderWidth: '0 2rem 2rem 2rem',
      borderColor: 'transparent transparent #007bff transparent',
      position: {
        left: 30,
        top: 0,
      },
      interval: 1,
      distance: 40,
      step: 7,
    },
    {
      // Pink
      diameter: 0,
      borderWidth: '2rem 2rem 2rem 0',
      borderColor: 'transparent #da3276 transparent transparent',
      position: {
        left: 350,
        top: 10,
      },
      interval: 1,
      distance: 25,
      step: 5,
    },
    {
      // Yello
      diameter: 0,
      borderWidth: ' 0 0 2.5rem 2.5rem',
      borderColor: ' transparent transparent #f9cc46 transparent',
      position: {
        left: 0,
        top: 60,
      },
      interval: 1,
      distance: 25,
      step: 5,
    },
    {
      // purple
      diameter: 0,
      borderWidth: '2.5rem 0 0 2.5rem',
      borderColor: 'transparent transparent transparent #4e2c80',
      position: {
        left: 50,
        top: 300,
      },
      interval: 1,
      distance: 30,
      step: 8,
    },
    {
      // Brown
      diameter: 0,
      borderWidth: '2rem 0 2rem 2rem',
      borderColor: 'transparent transparent transparent #d3a284',
      position: {
        left: 300,
        top: 75,
      },
      interval: 1,
      distance: 20,
      step: 5,
    },
    {
      // Violet
      diameter: 0,
      borderWidth: '2.5rem 0 0 2.5rem',
      borderColor: '#b6abcd transparent transparent transparent',
      position: {
        left: 30,
        top: 150,
      },
      interval: 1,
      distance: 25,
      step: 6,
    },
    {
      // Green
      diameter: 0,
      borderWidth: '0 0 2.5rem 2.5rem',
      borderColor: 'transparent transparent #3c914d transparent',
      position: {
        left: 320,
        top: 130,
      },
      interval: 1,
      distance: 10,
      step: 3,
    },
    {
      // Orange
      diameter: 0,
      borderWidth: '2.5rem 0 0 2.5rem',
      borderColor: 'transparent transparent transparent #f05a22',
      position: {
        left: 60,
        top: 90,
      },
      interval: 1,
      distance: 30,
      step: 8,
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
    <div className={classes.aboutMe_CTA}>
      <div className={classes.am_CTA_container}>
        <div className={classes.am_CTA_Slogan}>
          <div className={classes.am_CTA_Slogan_triangleImg}>
            <img
              src={CTAICON}
              alt={'Portfolio Logo'}
              className={classes.am_CTA_Slogan_img}
            />
            <div className={classes.am_CTA_triangles}>
              {data.map((item) => (
                <div
                  className={classes.am_CTA_triangle_part}
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
                        // background: item.color,
                        width: `${item.diameter}px`,
                        height: `${item.diameter}px`,
                        borderStyle: 'solid',
                        borderWidth: item.borderWidth,
                        borderColor: item.borderColor,
                      }}
                    />
                  </MovingPart>
                </div>
              ))}
            </div>
          </div>
          <div className={classes.am_CTA_Slogan_text}>
            <p>Design for culture, design for diversity.</p>
            <p>
              <a
                href="https://macxiang.notion.site/Mac-s-Collection-71a7e302db5b442d8fcde943d6abd79d"
                target="_blank"
                rel="noreferrer"
                className={classes.am_link}
              >
                #LogoStory
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe_CTA;
