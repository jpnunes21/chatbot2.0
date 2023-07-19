import React, { useState } from 'react';

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const handleUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleContinueConversation = () => {
    if (userName !== '') {
      props.actionProvider.continueConversation(userName)
    }
  }

  return (
    <div>
      <input
        name="nameText"
        type="text"
        value={ userName }
        onChange={ handleUserName }
      />
      <button type="button" onClick={() => handleContinueConversation()}>Send</button>
    </div>);
}

export default Login;
