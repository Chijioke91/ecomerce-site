import React from 'react';
import './SignInAndSignOut.scss';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/Signup';

const SignInAndSignOut = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignOut;
