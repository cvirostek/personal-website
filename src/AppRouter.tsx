import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './projects/Home';
import NotFound from './errors/NotFound';
import NotImplemented from './errors/NotImplemented';

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={NotImplemented} />
            <Route exact path='/projects' render={() => (<Redirect to='/' />)} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default AppRouter;
