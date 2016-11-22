import React from 'react';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="loginpage">
        <Logo />
        <LoginForm />
      </div>
    )
  }
}

export default LoginPage;
