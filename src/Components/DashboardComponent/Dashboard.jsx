import React from 'react';
import './Dashboard.css';
// import quebgimg from '../assets/que.png'; // Ensure the correct path

const Dashboard = () => {
  return (
    <>
    <div>
      <div className="dashboard-container">
        <div className='abc'>
          <h3>Your Queue No: 1</h3>
        </div>
        <div className="dashboard">
          <div className="dashboardimg">
            {/* <img src={quebgimg} alt="Queue Background" /> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Dashboard;