import React from 'react';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/Signup';
import { SignInAndSignUpContainer } from './AuthStyle';

const SignInAndSignOut = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignOut;
