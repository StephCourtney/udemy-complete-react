var Greeter = React.createClass({
    // Default props will load when no value has been passed in
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is from a component'
        }
    },
    onButtonClick: function(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        alert(name);
    },
    render: function(){
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>

                <form onSubmit={this.onButtonClick}>
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