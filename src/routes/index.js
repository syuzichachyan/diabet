import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../components/profile';
import Home from '../components/home';

class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        path="/profile"
                        render={props => <Profile {...props} />}
                    />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default Routers;
