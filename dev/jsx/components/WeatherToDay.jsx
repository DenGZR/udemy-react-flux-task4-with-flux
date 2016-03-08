var React = require('react');
var tempFormat = require('./tempFormat.js');
var weatherIcons = require('./weatherIcons.js');

var WeatherToDay = React.createClass({

    render: function() {

        var toDayWeather;
        var weatherlist;
        var temp;
        var windDeg;
        var windSpeed;
        var weather;

        weatherlist = this.props.weatherlist;

        toDayWeather = weatherlist[0];
        temp = tempFormat(toDayWeather.temp.day, true);
        windDeg = toDayWeather.deg;
        windSpeed = toDayWeather.speed;
        weather = toDayWeather.weather[0];

        return (
            <div className="to-day-weather" >
               <div className="weather-temp" >
                    <span>
                        <i className={weatherIcons(weather.id)}></i>
                    </span>
                    <span>{temp}<i className="wi wi-celsius"></i></span>
               </div>
               <div className="weather-wind">
                        <i className={'wi wi-wind towards-' + windDeg + '-deg'} ></i>
                        <i className={'wi wi-strong-wind'}></i>
                        <span>{windSpeed + ' m/s'}</span>
               </div>
            </div>
        );
    }
});

module.exports = WeatherToDay;