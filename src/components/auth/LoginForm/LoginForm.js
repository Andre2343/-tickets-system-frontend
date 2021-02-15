import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import TextInput from 'components/inputs/TextInput';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';
import routePaths from 'router/routePaths';
import s from './LoginForm.module.scss';

const loginParamsShape = {
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required').min(8),
};

const signUpParamsShape = {
  ...loginParamsShape,
  confirmPassword: yup.string().label('ads;fjlj').required('Password is required'),
};

const loginSchema = yup.object().shape(loginParamsShape);
const signUpSchema = yup.object().shape(signUpParamsShape);

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const LoginForm = ({ onSubmit, isSignUp }) => {
  const validationSchema = isSignUp ? signUpSchema : loginSchema;
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => (
        <Form>
          <Field name="email" label="Email" type="text" component={TextInput} />
          <Field name="password" label="Password" type="password" component={TextInput} />
          {isSignUp ? (
            <Field name="confirmPassword" label="Repeat password" type="password" component={TextInput} />
          ) : null}
          <div className={s.switcher}>
            {isSignUp ? (
              <Link to={routePaths.login}>Alreaty have an account?</Link>
            ) : (
              <Link to={routePaths.signUp}>Don&apos;t have an account?</Link>
            )}
          </div>
          <div className="text-right">
            <Button type="submit" color="primary">
              {isSignUp ? <span>Sign up</span> : <span>Login</span>}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
