var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

// Container Component
var Greeter = React.createClass({
    // Default props will load when no value has been passed in
    getDefaultProps: function () {
        return {name: 'React', message: 'This is from a component'}
    },
    // States are needed as props cannot be changed by component
    getInitialState: function () {
        return {name: this.props.name, message: this.props.message};
    },
    handleNewData: function (updates) {
        this.setState(updates);
    },
    render: function () {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Greeter;