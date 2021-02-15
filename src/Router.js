import React from 'react'

import {BrowserRouter,
        Switch,
        Route
} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Dashboard from './pages/Dashboard/Dashboard'

function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>

            <Route path="/dashboard">
                <Dashboard/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}


export default Routes;
