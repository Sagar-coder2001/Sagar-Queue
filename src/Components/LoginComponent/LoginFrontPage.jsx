import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginFrontPage.css'

const LoginFrontPage = () => {
    const navigate = useNavigate();

    const OpenLogin = () => {
        navigate('/login');
    }
  return (
    <>

        <div className="loginfront-container">
          <div className="loginfront">
            <div className="loginfrontimg">
              <div className="dummyy">
              <div className='welcomeimg'>
                      <img src="https://img.freepik.com/free-vector/cafe-terrace-with-welcome-message_23-2147503932.jpg" alt="" />
                    </div>
                    <h2>Wlocome</h2>
                    <span>To Our </span><br></br>
                    <span>Restaurant...</span>
              </div>
              <div className="openlogin">
              <button className='loginsubmit' onClick={OpenLogin}>Next</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
export default LoginFrontPage
