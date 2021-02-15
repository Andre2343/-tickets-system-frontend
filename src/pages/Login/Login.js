import React, { useCallback } from 'react';
import LoginForm from 'components/auth/LoginForm/LoginForm';
import Title from 'components/common/Title';

const Login = () => {
  const onSubmit = useCallback(() => {
    console.log('login');
  }, []);

  return (
    <>
      <Title>Login</Title>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};

export default Login;
