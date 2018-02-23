import React from 'react';
import './index.css';


let Login = ({ createUser, notif }) => {
	notif()
  return (
    <div>
      <div>
        <input type="text" id="username"/>
        <button className="button" onClick={() => {
					createUser(document.getElementById('username').value)
        }
        }>Send user!</button>
      </div>
    </div>
  )
}

export default Login;