var React = require('react');
var moment = require('moment');
var tempFormat = require('./tempFormat.js');
var weatherIcons = require('./weatherIcons.js');
var Forecast = require('./Forecast.jsx');

var Forecast = React.createClass({

render: function() {
    var dayCnt = this.props.cntDay;
    var FutureWeatherList = this.props.list.map(function(day, index) {
            var date;
            var day;
            var dayTemp;
            var nightTemp;
            var weather;

            if( index===0 || index>dayCnt) {
                return;
            }

            dayTemp = tempFormat( day.temp.day, true);
            nightTemp = tempFormat( day.temp.night, true);
            date = moment().add(index, 'days').format('DD MMMM');
            weather = day.weather[0];

            return (
                <tr key={index}>
                    <td>{date}</td>
                    <td><i className={weatherIcons(weather.id)}></i></td>
                    <td>{ dayTemp }<i className="wi wi-celsius"></i> /  {nightTemp}<i className="wi wi-celsius"></i></td>
                </tr>
            )
    });

    return (
        <tbody>
            {FutureWeatherList}
        </tbody>
    );
}
});

module.exports = Forecast;