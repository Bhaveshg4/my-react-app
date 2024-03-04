import React, { useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '32px',
      marginBottom: '20px',
      color: '#333',
    },
    form: {
      display: 'inline-block',
      textAlign: 'left',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      background: '#f5f5f5', // Updated background color
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      color: '#555',
      fontSize: '14px', // Adjusted font size
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '6px', // Adjusted border radius
      border: '1px solid #ccc',
      marginBottom: '15px',
      boxSizing: 'border-box',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '14px',
      background: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold', // Added font weight
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome Back!</h2>
      <form style={styles.form}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}
