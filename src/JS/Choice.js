import React from 'react';
import { useNavigate } from 'react-router-dom';

function Choice() {
  const navigate = useNavigate();

  const goToContractForm = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Choice Page</h1>
      <button onClick={goToContractForm}>Go to Contract Form</button>
    </div>
  );
}

export default Choice;
