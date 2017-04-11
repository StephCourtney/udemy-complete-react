var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

ReactDOM.render(
    // Expects history prop
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>, 
    document.getElementById('app')
);