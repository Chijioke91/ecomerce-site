import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import SignInAndSignOut from './pages/auth/SignInAndSignOut';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';

import Homepage from './pages/home-page/Homepage';
import Shop from './pages/shop/Shop';
import Checkout from './pages/checkout/Checkout';
import { checkUserSession } from './redux/user/userActions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
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

export default connect(mapStateToProps, { checkUserSession })(App);
