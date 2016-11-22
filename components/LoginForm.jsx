import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <form className="loginform">
        <label htmlFor="username">username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />
        <button id="loginbutton">log in</button>
      </form>
    )
  }
}

export default LoginForm;
