import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [userdetails, setuserdetails] = useState({
        username: '',
        mobile: '',
        number: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [queueId, setQueueId] = useState(null); // State to store the queue ID
    const navigate = useNavigate();

    const saveDetails = (e) => {
        e.preventDefault();
        if (userdetails.username === '' || userdetails.mobile === '' || userdetails.number === '') {
            alert('Please Fill all Required Fields');
            return false;
        }
        if (userdetails.mobile.length !== 10) {
            alert("Please Enter The Valid Mobile Number");
            return false;
        } else {
            let newQueueId;
            if (queueId === null) {
                newQueueId = 1; // If queueId is null, start with 1
            } else {
                newQueueId = queueId + 1; // Increment the queueId
            }
            setQueueId(newQueueId);
            setuserdetails({
                username: '',
                mobile: '',
                number: ''
            });
            setSubmitted(true);
            setShowModal(true);
            navigate('/modal', { state: { queueId: newQueueId } }); // Pass queueId to Modal
            return true;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserdetails((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={saveDetails}>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faUser} className="login__icon" />
                            <input
                                type="text"
                                name="username"
                                value={userdetails.username}
                                onChange={handleChange}
                                id='username'
                                className='login__input'
                                autoComplete='off'
                                placeholder='Enter Your Name'
                            />
                        </div>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faLock} className="login__icon" />
                            <input
                                type="tel"
                                name="mobile"
                                value={userdetails.mobile}
                                onChange={handleChange}
                                id='mobile'
                                className='login__input'
                                autoComplete='off'
                                placeholder='Enter Your Mobile No'
                            />
                        </div>
                        <div className="login__field">
                            <FontAwesomeIcon icon={faUser} className="login__icon" />
                            <input
                                type="number"
                                name="number"
                                value={userdetails.number}
                                onChange={handleChange}
                                id='number'
                                autoComplete='off'
                                className='login__input'
                                placeholder='No Of People'
                            />
                        </div>
                        <div className="login__field" style={{width:'250px', position :'absolute', bottom :'140px'}}>
                        <button type='submit' className='loginsubmit'>Add Customer</button>
                        </div>
                    </form>
                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons">
                            <a href="#" className="social-login__icon">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className="social-login__icon">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="social-login__icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;
