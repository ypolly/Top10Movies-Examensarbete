import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Menu from './core/Menu';
import PrivateRoute from './auth/privateRoute';
import Account from './user/UserAccount'
import AdminRoute from './auth/adminRoute';
import AdminAccount from './user/AdminAccount';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Product from './core/Product';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import UpdateCategory from './admin/updateCategory';


import Shop from './core/Shop';
import Cart from './core/Cart';
import Orders from './admin/Orders';
import Profile from './user/Profile';
import AboutUs from './core/AboutUs';
import ContactUs from './core/ContactUs';



const Routes = () => {


    return (

        <BrowserRouter>

            <Menu />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/account" exact component={Account} />
                <AdminRoute path="/admin/account" exact component={AdminAccount} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <Route path="/product/:productId" exact component={Product} />
                <AdminRoute path="/admin/products" exact component={ManageProducts} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
                <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />
                <Route path="/cart" exact component={Cart} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <Route path="/aboutus" exact component={AboutUs} />
                <Route path="/contactus" exact component={ContactUs} />

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
