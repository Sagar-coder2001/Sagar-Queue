import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import queimg from '../DashboardComponent/que.png';
import gameicon1 from '../DashboardComponent/game icon 1.png';
import gameicon2 from '../DashboardComponent/game icon 2.png';
import gameicon3 from '../DashboardComponent/game icon 3.png';
import gameicon4 from '../DashboardComponent/game icon 4.png';
import gameicon5 from '../DashboardComponent/game icon 5.png';
import gameicon6 from '../DashboardComponent/game icon 6.png';
import sandtimer from '../DashboardComponent/Sand timer.gif';
import { useLocation } from 'react-router-dom';
import manimage from '../DashboardComponent/man icon.png';

const Dashboard = () => {
  const location = useLocation();
  const { state } = location;
  const animationClass = state?.animation || '';
  const [images, setImages] = useState([manimage, manimage, manimage, manimage, manimage, manimage, manimage, manimage, manimage ]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animationClass) {
      document.getElementById('dashboard-root').classList.add(animationClass);
    }
  }, [animationClass]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setImages((prevImages) => {
          const newImages = [...prevImages];
          newImages.shift();
          newImages.push(manimage);
          return newImages;
        });
        setAnimate(false);
      }, 1000); // Duration of the animation
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="dashboard-root" className="dashboard-container">
        <div className="dashboard">
          <div className="main">
            <div className="nav">
              <div className='sandtimer'>
                <h4>Your Queue Id : 16</h4>
              </div>
              <img src={sandtimer} alt="sand timer" />
            </div>
            <div className="queueimg">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="man"
                  className={animate && idx === 0 ? 'animate-up' : ''}
                />
              ))}
            </div>
            <div className="game-container">
              <div className="game">
                <h4>Play Game and get Discount</h4>
                <div className="gameicon">
                  <img src={gameicon1} alt="game icon 1" />
                  <img src={gameicon2} alt="game icon 2" />
                  <img src={gameicon3} alt="game icon 3" />
                  <img src={gameicon4} alt="game icon 4" />
                  <img src={gameicon5} alt="game icon 5" />
                  <img src={gameicon6} alt="game icon 6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
