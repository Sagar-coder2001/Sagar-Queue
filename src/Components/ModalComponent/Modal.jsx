import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { queueId } = location.state || {}; 

  const handleConfirm = () => {
    navigate('/dashboard');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Congratulations!</h2>
        <p>Your queue ID is {queueId}</p>
        <div className="modal-actions">
          <button onClick={handleConfirm}>OK</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
