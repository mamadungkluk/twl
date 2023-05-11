import React, { useState } from 'react';
import LoginForm from './Login';
import FileUploadForm from './FileUploadForm';

function App() {
  const [authToken, setAuthToken] = useState('');

  const handleLogin = (token) => {
    setAuthToken(token);
  };
  
  return (
    <div>
      {!authToken ? (
        <LoginForm handleLogin={handleLogin} />
      ) : (
        <FileUploadForm authToken={authToken} />
      )}
    </div>
  );
      };