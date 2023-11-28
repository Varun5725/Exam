import React, { useState } from 'react';
import Success from './Success';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const users = [
      { email: 'varunb5725@gmail.com', password: 'password1' },
      { email: 'ram5725@gmail.com', password: 'password2' }
    ];

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid password or invalid email');
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Success />
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      )}
    </>
  );
}

export default Login;
