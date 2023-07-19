import React, { useState } from 'react';

const Login = (props) => {
  const [userName, setUserName] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const handleUserName = (event) => {
    setUserName(event.target.value)
  }

  const handlePasswordValue = (event) => {
    setPasswordValue(event.target.value)
  }

  const handleContinueConversation = () => {
    if (userName !== '' && passwordValue === '123') {
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
      <input
        name="passwordText"
        type="password"
        value={ passwordValue }
        onChange={ handlePasswordValue }
      />
      <button type="button" onClick={() => handleContinueConversation()}>Send</button>
    </div>);
}

export default Login;
