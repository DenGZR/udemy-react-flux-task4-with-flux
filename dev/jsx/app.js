var React = require('react');
var ReactDOM = require('react-dom');
var WeatherApp = require('./components/WeatherApp.jsx');

var color = {
    red: '#ec4444',
    orange: '#e68e4f',
    blue: '#357db5'
}

ReactDOM.render(<WeatherApp mainColor={color.blue} city="dnipropetrovsk"/>, document.getElementById('weather'));