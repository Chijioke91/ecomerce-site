import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/home-page/Homepage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignOut from './pages/auth/SignInAndSignOut';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
