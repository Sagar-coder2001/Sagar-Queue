import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faLock } from '@fortawesome/free-solid-svg-icons';
import { increment } from '../Features/queueSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [animationClass, setAnimationClass] = useState('');
    const [userdetails, setuserdetails] = useState({
        username: '',
        mobile: '',
        number: '',
        gender: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [queueIds, setQueueIds] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const storedQueueIds = localStorage.getItem('queueIds');
        if (storedQueueIds) {
            setQueueIds(JSON.parse(storedQueueIds));
        }
    }, []);

    useEffect(() => {
        setAnimationClass('fade-in');
    }, []);

    const validateFields = () => {
        const newErrors = {};
        if (!userdetails.username) newErrors.username = true;
        if (!userdetails.mobile) newErrors.mobile = true;
        if (!userdetails.number) newErrors.number = true;
        if (!userdetails.gender) newErrors.gender = true;
        if (userdetails.mobile && userdetails.mobile.length !== 10) newErrors.mobile = true;
        return newErrors;
    };

    const saveDetails = (e) => {
        e.preventDefault();
        const validationErrors = validateFields();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            return false;
        }
        
        const newQueueId = queueIds.length ? Math.max(...queueIds) + 1 : 1;
        const updatedQueueIds = [...queueIds, newQueueId];
        setQueueIds(updatedQueueIds);
        localStorage.setItem('queueIds', JSON.stringify(updatedQueueIds));
        setuserdetails({
            username: '',
            mobile: '',
            number: '',
            gender: ''
        });
        setSubmitted(true);
        setShowModal(true);
        console.log(userdetails)
        dispatch(increment(newQueueId));
        navigate('/modal');
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserdetails((prev) => ({
            ...prev,
            [name]: value
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: false
        }));
    };

    return (
        <div className={`login-form ${animationClass}`}>
            <div className="login-container">
                <div className="logindiv">
                    <div className="loginimg">
                        <div className="screen">
                            <form className="login" onSubmit={saveDetails}>
                                <div className={`login__field ${errors.username ? 'error' : ''}`}>
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
                                <div className={`login__field ${errors.mobile ? 'error' : ''}`}>
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
                                <div className={`login__field ${errors.number ? 'error' : ''}`}>
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
                                <div className={`radio-field ${errors.gender ? 'error' : ''}`}>
                                    
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={userdetails.gender === 'male'}
                                            onChange={handleChange}
                                            className="radio-input"
                                        />
                                        Male
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={userdetails.gender === 'female'}
                                            onChange={handleChange}
                                            className="radio-input"
                                        />
                                        Female
                                    </label>
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="other"
                                            checked={userdetails.gender === 'other'}
                                            onChange={handleChange}
                                            className="radio-input"
                                        />
                                        Other
                                    </label>
                                </div>
                                <div className="login__field">
                                    <button type='submit' className='loginsubmit'>Add Customer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
