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


const Routes = () => {


    return (

        <BrowserRouter>

            <Menu />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/account" exact component={Account} />
                <AdminRoute path="/admin/account" exact component={AdminAccount} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;