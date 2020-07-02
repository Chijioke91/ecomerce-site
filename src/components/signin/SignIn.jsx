import React, { Component } from 'react';
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

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { emailSigninStart } = this.props;

    emailSigninStart({ email, password });
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { googleSigninStart } = this.props;
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
  }
}

export default connect(null, { googleSigninStart, emailSigninStart })(SignIn);
