var React = require('react');
var ForecastList = require('./ForecastList.jsx');

var FutureWeatherBox = React.createClass({

    render: function() {

        var weatherlist;
        weatherlist = this.props.weatherlist;

        return (
            <div className="weather-next-day" >
                <table className="table table-striped">
                    <ForecastList list={weatherlist} cntDay="6"/>
                </table>
            </div>


        );
    }
});

module.exports = FutureWeatherBox;