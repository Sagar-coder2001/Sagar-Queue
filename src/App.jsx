import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/DashboardComponent/Dashboard';
import './App.css'
import LoginFrontPage from './Components/LoginComponent/LoginFrontPage';
import Login from './Components/LoginComponent/Login';
import Modal from './Components/ModalComponent/Modal';


const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};
const App = () => {
  // if (!isMobileDevice()) {
  //   return <div>Please access this app on a mobile device.</div>;
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <LoginFrontPage />
        } />
        <Route path="/login" element={
            <Login />
        } />
        <Route path="/modal" element={
          <Modal />
        } />
        <Route path="/dashboard" element={
          <div className='dashboard-container'>
            <Dashboard />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
