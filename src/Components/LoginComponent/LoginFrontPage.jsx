import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './LoginFrontPage.css'

const LoginFrontPage = () => {
    const navigate = useNavigate();

    const OpenLogin = () => {
        navigate('/login');
    }

  return (
    <>
       <div className="container">
            <div className="screen">
                <div className="screen__content">
                  <h2></h2><br></br>
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
        </div>
    </>
  )
}

export default LoginFrontPage
