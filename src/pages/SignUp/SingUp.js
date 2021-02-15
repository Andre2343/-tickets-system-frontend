import LoginForm from 'components/auth/LoginForm/LoginForm';
import React, { useCallback } from 'react';
import Title from 'components/common/Title';

const SignUp = () => {
  const onSubmit = useCallback(() => {
    console.log('login');
  }, []);

  return (
    <>
      <Title>Sign Up</Title>
      <LoginForm onSubmit={onSubmit} isSignUp />
    </>
  );
};

export default SignUp;
