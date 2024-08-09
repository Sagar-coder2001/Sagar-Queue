import React, { useEffect } from 'react';
import './Dashboard.css';
import queimg from '../DashboardComponent/que.png'
import gameicon1 from '../DashboardComponent/game icon 1.png'
import gameicon2 from '../DashboardComponent/game icon 2.png'
import gameicon3 from '../DashboardComponent/game icon 3.png'
import gameicon4 from '../DashboardComponent/game icon 4.png'
import gameicon5 from '../DashboardComponent/game icon 5.png'
import gameicon6 from '../DashboardComponent/game icon 6.png'
import sandtimer from '../DashboardComponent/Sand timer.gif'
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import manimage from '../DashboardComponent/man.jpg';
=======
import manimage from '../DashboardComponent/man icon.png'
import { useSelector } from 'react-redux';
>>>>>>> 09c1dc407942f366902ed98c51b9db882ee2bed1

const Dashboard = () => {
  const location = useLocation();
  const { state } = location;
  const animationClass = state?.animation || '';
  const select = useSelector((state) => state.Queue)

  useEffect(() => {
    // This effect will run only once when the component mounts
    if (animationClass) {
      document.getElementById('dashboard-root').classList.add(animationClass);
    }
  }, [animationClass]);

<<<<<<< HEAD
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
      }, 1000); 
    }, 10000);

    return () => clearInterval(interval);
  }, []);

=======
>>>>>>> 09c1dc407942f366902ed98c51b9db882ee2bed1
  return (
    <>
    <div id="dashboard-root" className="dashboard-container">
    <div className="dashboard">
      <div className="main">
        <div className="nav">
          <div className='sandtimer'>
          <h4>Your Queue : <span>{select}</span></h4>
          <h5>Time : 40 Min</h5>
          </div>
          <img src= {sandtimer} alt="" />
        </div>
        <div className="queueimg">
          <img src={queimg} alt="" />
        </div>
        <div className="game-container">
          <div className="game">
            <h4>Play Game and get Discount</h4>
          <div className="gameicon">
            <img src= {gameicon1} alt="" />
            <img src= {gameicon2} alt="" />
            <img src= {gameicon3} alt="" />
            <img src= {gameicon4} alt="" />
            <img src= {gameicon5} alt="" />
            <img src= {gameicon6} alt="" />
          </div>
          <button>Submit</button>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
export default Dashboard;