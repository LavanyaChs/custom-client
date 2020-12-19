import React from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import { useAuthDataContext } from '../AuthData/AuthDataContext';
import Home from '../Home/Home';
import SignInForm from '../SignInForm/SignInForm';
import UserDetails from '../UserDetails/UserDetails';
import TodoDashboard from '../TodoManagement/TodoManagement'
const PrivateRoute = ({ component:Component, ...options }) => {
    const { userName,userLocation } = useAuthDataContext();
    
    return <Route {...options} render={props => (
        userName ?
            <Component {...props} />
        : <Redirect to="/signin" />
    )}/>;
  };
const AppRoutes = () => (
    <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path='/signin' exact component={SignInForm}/>
        <PrivateRoute  path='/home' exact component={Home} />
        <PrivateRoute path='/details' exact component={UserDetails} />
        <Route path='/todoDashboard' component={TodoDashboard}/>
    </Switch>
)
export default AppRoutes;