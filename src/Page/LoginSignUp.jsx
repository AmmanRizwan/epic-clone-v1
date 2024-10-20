import React, { useState } from "react";
import './CSS/LoginSignUp.css';
import { SiEpicgames } from "react-icons/si";


const LoginSignUp = () => {
  const [login, setLogin] = useState("SignIn");
  console.log(login);

  return (
    <div className="login-sign">    
    <div className="login-sign-up">
      <div className="epic-logo-signin">
        <SiEpicgames className="epic-logo-style" />
      </div>

      {login === "SignIn" ? 
      <div>
        <p className="create-account">Create Your Account</p>
      </div>
      :
      <div>
        <p className="create-account">Login Your Account</p>
      </div>
    }

      {login === "SignIn" ? 
      <div className="user-input-text">
        <input type="text" placeholder="Enter Your User Name" />
        <input type="text" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <input type="password" placeholder="Re-Enter Your Password" />
      </div>
      : 
      <div className="user-input-text">
        <input type="text" placeholder="Enter Your User Name or Email" />
        <input type="password" placeholder="Enter Your Password" />
      </div>
      }

      <div className="sign-in-button"><button>{login === "SignIn" ? "SignIn" : "LogIn"}</button></div>

      <div className="other-option">OR</div>
      {login === "SignIn" ?
      
      <div className="login-option">Don&apos;t have an account. Create one <span onClick={() => {setLogin("LogIn")}}>{login === "SignIn" ? "LogIn" : "SignIn"}</span></div>
      : 
      <div className="login-option">Already have an account. <span onClick={() => {setLogin("SignIn")}}>{login === "LogIn" ? "SignIn" : "LogIn"}</span></div>
      
    }
  </div>

    </div>
  )
}

export default LoginSignUp;