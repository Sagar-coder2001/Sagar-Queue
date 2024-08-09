import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';
import { useSelector } from 'react-redux';

const Modal = () => {

  const navigate = useNavigate();
  const select = useSelector((state) => state.Queue)

  const handleConfirm = () => {
    navigate('/dashboard', { state: { animation: 'fade-in'} });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
    <div className="modal-overlay">
      <div className="modal-content">
        <h2><img src="https://media.istockphoto.com/id/1125716911/vector/party-popper-with-confetti.jpg?s=612x612&w=0&k=20&c=sAyofM-MQ5TL-pLyFseV9Vke_W2zyYX1btP90oGJQZE=" alt="" /> Congratulations! <img src="https://media.istockphoto.com/id/1125716911/vector/party-popper-with-confetti.jpg?s=612x612&w=0&k=20&c=sAyofM-MQ5TL-pLyFseV9Vke_W2zyYX1btP90oGJQZE=" alt="" /></h2>
        <p>Your queue ID is {select}</p>
        <div className="modal-actions">
          <button onClick={handleConfirm}>OK</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Modal;
