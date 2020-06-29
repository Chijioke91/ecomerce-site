import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './SigninStyles';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: '', password: '' });
    } catch (e) {
      console.log('Error signing in', e.message);
    }
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle className="title">I already have an account</SignInTitle>
        <p>Sign in with email and password</p>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <ButtonsBarContainer className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
