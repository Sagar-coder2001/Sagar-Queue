import React from 'react';
import './Dashboard.css';
import queimg from '../DashboardComponent/que.png'

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
    <div className="dashboard">
      <div className="main">
        <div className="nav">
          <h4>Name</h4>
          <h4>Your Queue Id : 16</h4>
        </div>
        <div className="queueimg">
          <img src={queimg} alt="" />
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
export default Dashboard;