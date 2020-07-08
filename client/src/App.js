import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import SignInAndSignOut from './pages/auth/SignInAndSignOut';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';

import Homepage from './pages/home-page/Homepage';
import Shop from './pages/shop/Shop';
import Checkout from './pages/checkout/Checkout';
import { checkUserSession } from './redux/user/userActions';

import { GlobalStyles } from './global.styles';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignOut />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { checkUserSession })(App);
