import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignUpContainer, SignUpTitle } from './SignupStyles';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (e) {
      console.log(`Error creating user`, e.message);
    }
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with Email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            handleChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
