import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Error</h1>
      <p>Oops! Something went wrong.</p>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
};

export default ErrorPage;