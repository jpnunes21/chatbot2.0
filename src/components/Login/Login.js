import React from 'react';

const Login = (props) => {
  return (
    <div>
      <input
        name="nameText"
        type="text"
      />
      <button type="button" onClick={() => console.log(props)}>Send</button>
    </div>);
}

export default Login;
