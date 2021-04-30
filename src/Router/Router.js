import React from 'react';
import {Route,Switch} from 'react-router-dom';
import CreatePortfolio from '../Portfolio/CreatePortfolio';
import ListPortfolio from '../Portfolio/ListPortfolio';
import AddShare from '../Portfolio/AddShare';
import ViewShares from '../Portfolio/ViewShares';

export const routes = (
    <Switch>
        <Route exact path="/create-portfolio" component={CreatePortfolio}/>
        <Route exact path="/view-portfolio" component={ListPortfolio}/>
        <Route exact path="/add-share" component={AddShare}/>
        <Route exact path="/shares" component={ViewShares}/>
    </Switch>
);