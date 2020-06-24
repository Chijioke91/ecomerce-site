import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import SignInAndSignOut from './pages/auth/SignInAndSignOut';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/user.selector';

import Homepage from './pages/home-page/Homepage';
import Shop from './pages/shop/Shop';
import Checkout from './pages/checkout/Checkout';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignOut />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
