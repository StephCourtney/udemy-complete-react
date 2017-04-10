var Greeter = React.createClass({
    // Default props will load when no value has been passed in
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is from a component'
        }
    },
    // States are needed as props cannot be changed by component
    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    onButtonClick: function(e) {
        // Stops page refresh
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = "";

        if(typeof name === 'string' && name.length > 0) {
            // Used to change the state of a components element
            this.setState({
                name: name
            });
        }
    },
    render: function(){
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>

                <form onSubmit={this.onButtonClick}>
                    {/*name is added to list of refs*/}
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

var firstName = 'Steph';
var greetMessage = 'How are you?';

ReactDOM.render(
    <Greeter name={firstName} message={greetMessage}/>, 
    document.getElementById('app'));