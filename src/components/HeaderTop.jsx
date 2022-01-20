import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../actions/userActions";

import classes from "./HeaderTop.module.css";

const HeaderTop = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const showHandler = (e) => {
    setShow(!show);
  };

  const logoutHandler = (e) => {
    dispatch(logout());
  };

  return (
    <div className={`${classes.headerTopWrapper} container`}>
      <div className={classes.headerTop}>
        <div className={classes.headerTopLeft}>
          <Link to="/">
            <img src="/icons/cc_logo.png" alt="CC Logo" />
          </Link>
        </div>
        <div className={classes.headerTopMiddle}>
          <input type="text" placeholder="Type here to search" />
          <img
            className={classes.searchIcon}
            src="/icons/search.png"
            alt="Search"
          />
        </div>
        <div className={classes.headerTopRight}>
          {/* <div className={classes.headerTopRightFirst}> */}
            <Link className={classes.wishlistIcon} to="/wishlist">
              <img src="/icons/wishlist_logo.png" alt="" />
            </Link>
          {/* </div> */}
          <Link to="/shopping-cart" className={classes.cartIcon}>
            <img src="/icons/cart_logo.png" alt="Cart Icon" />
            {cartItems.length > 0 ? (<span>{cartItems.length}</span>) : <span>0</span>}
          </Link>
          <div className={classes.headerTopRightThird}>
            {userInfo ? (
              <div className={classes.userSigninDropdown}>
                <span onClick={showHandler}>
                  {userInfo.data.name} <i className="fas fa-sort-down"></i>
                </span>
                <ul
                  className={`${classes.userSigninList} ${
                    show ? classes.dropdownShow : ""
                  } `}
                >
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li onClick={logoutHandler}>logout</li>
                </ul>
              </div>
            ) : (
              <Link to="/signin-signup" className={classes.loginPlace}>
                JOIN
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
