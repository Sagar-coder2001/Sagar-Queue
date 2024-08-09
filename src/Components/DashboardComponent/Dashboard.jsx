import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import man from '../DashboardComponent/man.png';
import women from '../DashboardComponent/women.png';
import gameicon1 from '../DashboardComponent/game icon 1.png';
import gameicon2 from '../DashboardComponent/game icon 2.png';
import gameicon3 from '../DashboardComponent/game icon 3.png';
import gameicon4 from '../DashboardComponent/game icon 4.png';
import gameicon5 from '../DashboardComponent/game icon 5.png';
import gameicon6 from '../DashboardComponent/game icon 6.png';
import sandtimer from '../DashboardComponent/Sand timer.gif';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const queue = useSelector((state) => state.Queue);

  // State for queue images
  const [queueImages, setQueueImages] = useState([man,man,man,man,man,man,man,man,man,man,man,man,man,]);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateLeft(true); // Start left animation

      setTimeout(() => {
        setAnimateLeft(false); // End left animation
        setQueueImages((prevImages) => {
          const [firstImage, ...rest] = prevImages;
          return [...rest, firstImage]; // Reorder images
        });

        setTimeout(() => {
          setAnimateRight(true); // Start right animation
          setTimeout(() => setAnimateRight(false), 500); // End right animation after 0.5s
        }, 50); // Delay before starting right animation
      }, 1000); // 1 second to match the left animation duration
    }, 10000); // 10 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard">
          <div className="navigation">
            <div className="sandtime">
              <p>Time : 10min</p>
            </div>
            <div className="sandclock">
              <img src={sandtimer} alt="" />
            </div>
          </div>
          <div className="show-queue">
            <span>Your Queue : {queue}</span>
          </div>
          <div className={`queue-img ${animateLeft ? 'animate-left' : ''} ${animateRight ? 'animate-right' : ''}`}>
            {queueImages.map((image, index) => (
              <img key={index} src={image} alt="" className="queue-image" />
            ))}
          </div>
          <div className="game-queue">
            <div className="game-instruction">
              <h4>Game Instruction</h4>
              <p>i maxime debitis ipsam, praesentium ab quod aperiam.</p>
              <p>i maxime debitis ipsam, praesentium ab quod aperiam.</p>
            </div>
            <div className="game-icons">
              <h4>Play Game And Get Discount</h4>
              <div className="game-icon">
                <img src={gameicon1} alt="" />
                <img src={gameicon2} alt="" />
                <img src={gameicon3} alt="" />
                <img src={gameicon4} alt="" />
                <img src={gameicon5} alt="" />
                <img src={gameicon6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
