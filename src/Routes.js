import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Menu from './core/Menu';
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import UserDashboard from './user/UserDashboard'
import Profile from './user/Profile'
import AdminDashboard from './user/AdminDashboard'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import UpdateProduct from './admin/UpdateProduct'
import Orders from './admin/Orders'
import ManageProducts from './admin/ManageProducts'
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path= "/" exact component={Home} />
          <Route path= "/shop" exact component={Shop} />
          <Route path= "/signin" exact component={Signin} />
          <Route path= "/signup" exact component={Signup} />
          <PrivateRoute path= "/user/dashboard" exact component={UserDashboard} />
          <PrivateRoute path= "/profile/:userId" exact component={Profile} />
          <PrivateRoute path= "/admin/products" exact component={ManageProducts} />
          <PrivateRoute path= "/admin/product/update/:productId" exact component={UpdateProduct} />
          <AdminRoute path= "/admin/dashboard" exact component={AdminDashboard} />
          <AdminRoute path= "/admin/orders" exact component={Orders} />
          <AdminRoute path= "/create/category" exact component={AddCategory} />
          <Route path="/create/product" exact component={AddProduct} />
          <Route path="/product/:productId" exact component={Product} />
          <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
