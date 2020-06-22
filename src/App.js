import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/home-page/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignOut from './pages/auth/SignInAndSignOut';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
