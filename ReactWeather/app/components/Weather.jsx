var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            location: 'Chicago',
            temp: 23
        }
    },
    handleSearch: function(location){
        var _this = this;
        openWeatherMap.getTemp(location).then(function(temp){
            _this.setState({
                location: location,
                temp: temp
            });
        }, function(err){
            alert('Error: ', err);
        });
    },
    render: function() {
        var {temp, location} = this.state;
        return (
            <div>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp}/>
            </div>
            
        );
    }
});

module.exports = Weather;