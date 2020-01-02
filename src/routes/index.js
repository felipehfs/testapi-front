import React from 'react';
import {Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import DashboardPage from '../pages/dashboard';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} 
        render={(props) => localStorage.getItem('token')? <Component {...props} />: <Redirect to="/"/>
    }/>
)

export default function() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
            </Switch>
        </BrowserRouter>
    )
}