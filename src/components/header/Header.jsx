import React from 'react';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './HeaderStyles';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer className="options">
        <OptionLink to="/shop" className="option">
          SHOP
        </OptionLink>
        <OptionLink to="/shop" className="option">
          CONTACT
        </OptionLink>

        {currentUser ? (
          <OptionLink
            as="div"
            className="option"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
