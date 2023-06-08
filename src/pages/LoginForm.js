import React, { useState } from 'react';
import './Home'; 
import '../components/Navbar.css';

import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  function goForward() {
    navigate(-1);
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate the form
    if (username === '' || password === '') {
      alert('Please enter your username and password');
    } else {
      alert('Logged in successfully!');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button onClick={goForward} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

