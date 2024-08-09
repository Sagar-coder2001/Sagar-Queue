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
       {/* <div className="front-container">
            <div className="screen">
                <div className="screen__content">
                  <div style={{paddingTop :'100px', paddingLeft : '50px'}}>
                    <div>
                      <img src="https://img.freepik.com/free-vector/cafe-terrace-with-welcome-message_23-2147503932.jpg" alt="" />
                    </div>
                    <h2>Wlocome</h2>
                    <span>To Our </span><br></br>
                    <span>Restaurant...</span>
                  </div>
                    <div className="social-login">
                        <div className="login__field" style={{width:'100px', position :'absolute', bottom :'10px', right :'10px' }}>
                        <button onClick={OpenLogin} className='loginsubmit'>Next</button>
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
        </div> */}

        <div className="sagar-container">
          <div className="sagar">
            <div className="sagarimg">
              <div className="dummy">
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
