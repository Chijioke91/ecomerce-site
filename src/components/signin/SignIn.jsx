import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './SigninStyles';
import {
  googleSigninStart,
  emailSigninStart,
} from '../../redux/user/userActions';

const SignIn = ({ emailSigninStart, googleSigninStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = userCredentials;

    emailSigninStart({ email, password });
  };

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const { email, password } = userCredentials;

  return (
    <SignInContainer>
      <SignInTitle className="title">I already have an account</SignInTitle>
      <p>Sign in with email and password</p>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonsBarContainer className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSigninStart}
          >
            Sign in with google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default connect(null, { googleSigninStart, emailSigninStart })(SignIn);
