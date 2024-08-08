import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faLock } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { increment } from '../Features/queueSlice';
import { useDispatch , useSelector } from 'react-redux';

const Login = () => {
    const [animationClass, setAnimationClass] = useState('');

    const [userdetails, setuserdetails] = useState({
        username: '',
        mobile: '',
        number: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [queueIds, setQueueIds] = useState([]); // State to store the queue IDs array
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Load the queueIds array from local storage
        const storedQueueIds = localStorage.getItem('queueIds');
        if (storedQueueIds) {
            setQueueIds(JSON.parse(storedQueueIds));
        }
    }, []);

    useEffect(() => {
        setAnimationClass('fade-in'); // Change to 'slide-in' for sliding effect
    }, []);

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
            const newQueueId = queueIds.length ? Math.max(...queueIds) + 1 : 1; // Generate new queue ID
            const updatedQueueIds = [...queueIds, newQueueId]; // Add new queue ID to the array
            setQueueIds(updatedQueueIds);
            // console.log(queueIds);
            localStorage.setItem('queueIds', JSON.stringify(updatedQueueIds)); // Save the updated queueIds array to local storage
            setuserdetails({
                username: '',
                mobile: '',
                number: ''
            });
            setSubmitted(true);
            setShowModal(true);
            dispatch(increment(newQueueId));
            navigate('/modal'); // Pass queueId to Modal
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
        <>
        <div className={`login-form ${animationClass}`}>
        <div className="container" >
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
                            <FontAwesomeIcon icon={faUsers} className="login__icon" />
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
                        <div className="login__field" style={{ width: '250px', position: 'absolute', bottom: '130px' }}>
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
        </div>
        </>
    );
};

export default Login;
