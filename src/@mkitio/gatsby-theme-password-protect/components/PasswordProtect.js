/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '@mkitio/gatsby-theme-password-protect/src/utils/utils';

const styles = {
  wrapper: {
    height: '100vh',
    background: '#022c43',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: '48px',
    border: '2px solid #a1b0c6',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    height: '48px',
    background: '#ffff33',
    color: '#022c43',
    border: 'none',
    borderRadius: '4px',
    marginTop: '16px',
    textTransform: 'uppercase',
  },
  buttonHover: {
    background: 'whitesmoke',
    color: '#022c43',
  },
};

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [isButtonHovered, buttonHover] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div style={styles.wrapper}>
      <h1>PROTECTED CONTENT</h1>
      <h4>Please enter the password to view this page.</h4>

      <form onSubmit={onSubmit} style={{ width: '320px' }}>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={styles.input}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : null),
          }}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          Go To Page
        </button>
      </form>
    </div>
  );
};

export default PasswordProtect;
