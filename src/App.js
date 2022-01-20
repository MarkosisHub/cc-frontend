import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { listProducts } from "./actions/productsAction";
// import ActivationScreen from "./screens/ActivationScreen";
import AdminDashboardScreen from "./screens/AdminDashboardScreen";
// import AdminOrderlistScreen from "./screens/AdminOrderlistScreen";
import AdminProductDetailsScreen from "./screens/AdminProductDetailsScreen";
import AdminProductlistScreen from "./screens/AdminProductlistScreen";
// import AdminSettingsScreen from "./screens/AdminSettingsScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import HomeScreen from "./screens/HomeScreen";
import AdminProductCreateScreen from "./screens/AdminProductCreateScreen";
import AdminProductUpdateScreen from "./screens/AdminProductUpdateScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductScreen from "./screens/ProductScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import SigninSignupScreen from "./screens/SigninSignupScreen";
// import UserProfileScreen from "./screens/UserProfileScreen";
// import {allOrders} from './actions/orderActions'
// import AdminOrderDetailsScreen from "./screens/AdminOrderDetailsScreen";
import UserWishlistScreen from "./screens/UserWishlistScreen.jsx";
// import UserOrderlistScreen from "./screens/UserOrderlistScreen";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    // dispatch(allOrders())
  }, [dispatch]);

  return (
    <>
      <Router>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/checkout" component={CheckoutScreen} />
        <Route exact path="/product/:id" component={ProductDetailsScreen} />
        <Route path="/user/wishlist" component={UserWishlistScreen} />
        <Route path="/signin-signup" component={SigninSignupScreen} />
        <Route path="/shopping-cart" component={ShoppingCartScreen} />
        <Route exact path="/products/:prod" component={ProductScreen} />
        <Route path="/admin/dashboard" component={AdminDashboardScreen} />
        <Route
          path="/admin/productcreate"
          component={AdminProductCreateScreen}
        />
        <Route
          exact
          path="/admin/productlist"
          component={AdminProductlistScreen}
        />
        <Route exact path="/admin/productlist/:id" component={AdminProductDetailsScreen} />
        <Route path="/admin/productupdate/:id" component={AdminProductUpdateScreen} />
      </Router>
    </>
  );
};

export default App;

{
  /* 
        <Route path="/admin/settings" component={AdminSettingsScreen} />
        
        
        <Route exact path="/admin/orderlist" component={AdminOrderlistScreen} />
        <Route exact path="/admin/orderlist/:id" component={AdminOrderDetailsScreen} />
        
        <Route path="/profile" component={UserProfileScreen} />
        <Route path="/user/orderlist" component={UserOrderlistScreen} />
        <Route path="/user/activate/:token" component={ActivationScreen} />
        <Route path="/shopping-cart" component={ShoppingCartScreen} /> */
}
