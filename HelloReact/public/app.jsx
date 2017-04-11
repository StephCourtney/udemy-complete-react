var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var firstName = 'Steph';
var greetMessage = 'How are you?';

ReactDOM.render(
    <Greeter name={firstName} message={greetMessage}/>, document.getElementById('app'));