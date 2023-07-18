import React, { useState } from 'react';

const Login = (props) => {
  const [userName, setUserName] = useState("")
  const [userValid, setUserNameValid] = useState(false)

  const handleInputUserName = (event) => {
    setUserName(event.target.value);
  }

  const IsUserValid = () => {
    if (userName !== "") setUserNameValid(true);
  }

  return (
    <div>
      <input
        name="nameText"
        type="text"
        value={ userName }
        onChange={handleInputUserName}
      />
      <button type="button" onClick={() => IsUserValid}>Send</button>
    </div>);
}

export default Login;
