import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/Home';
import NotFound from './errors/NotFound';
import About from './about/About'

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' render={() => (<Redirect to='/' />)} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default AppRouter;
