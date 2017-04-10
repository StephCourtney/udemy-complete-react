var Greeter = React.createClass({
    // Default props will load when no value has been passed in
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is from a component'
        }
    },
    render: function(){
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var firstName = 'Steph';
var greetMessage = 'How are you?';

ReactDOM.render(
    <Greeter name={firstName} message={greetMessage}/>, 
    document.getElementById('app'));