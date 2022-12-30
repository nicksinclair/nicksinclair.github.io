/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '@mkitio/gatsby-theme-password-protect/src/utils/utils';
import { Link } from 'gatsby';

const PasswordProtect = () => {
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div className="site-container">
      <div className="content">
        <Link to="/projects">&larr; Back to Projects</Link>

        <div className="password">
          <h1>PROTECTED CONTENT</h1>
          <h4>Please enter the password to view this page.</h4>

          <form onSubmit={onSubmit} style={{ width: '320px' }}>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button type="submit">Go To Page</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtect;
