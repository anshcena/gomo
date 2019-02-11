import React from 'react';
import landingpage from './landingpage';
import contact from './contact';

import { Switch, Route } from 'react-router-dom';
import ride from './takeride';
import drive from './drive';
import getstarted from './getstarted';

const Main = () => (
    <Switch>
        <Route exact path="/" component={landingpage}/> 
        <Route path="/contact" component={contact}/>
        <Route path="/takeride" component={ride}/>
        <Route path="/takedrive" component={drive}/>
        <Route path="/getstarted" component={getstarted}/>
       
        
    </Switch>
)

export default Main;