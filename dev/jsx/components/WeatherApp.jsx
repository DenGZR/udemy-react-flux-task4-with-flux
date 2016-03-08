
var React = require('react');
var WeatherStore = require('../stores/WeatherStore');
var WeatherActions = require('../actions/WeatherActions');
var CitySearch = require('./CitySearch.jsx');
var ToDayDate = require('./ToDayDate.jsx');
var WeatherToDay = require('./WeatherToDay.jsx');
var WeatherNextDay = require('./WeatherNextDay.jsx');


function getWeatherState() {
  return {
    forecasts: WeatherStore.getForecast()
  };
}

var TodoApp = React.createClass({

  getInitialState: function() {
    return getWeatherState();
  },

  componentDidMount: function() {
    WeatherStore.addChangeListener(this._onChange);
    this._onSearch(this.props.city);
  },

  componentWillUnmount: function() {
    WeatherStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {

    var   baseStyle;

        baseStyle = {
            weatherMain:{
                background :  this.props.mainColor
            }
        };

    return (
      <div className="weather-container">
          <div className="weather-main" style={baseStyle.weatherMain}>
              <CitySearch value={this.state.forecasts.city.name || this.props.city} onSearch={this._onSearch}></CitySearch>
              <ToDayDate></ToDayDate>
              <WeatherToDay weatherlist={this.state.forecasts.list}></WeatherToDay>
          </div>
              <WeatherNextDay weatherlist={this.state.forecasts.list}></WeatherNextDay>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getWeatherState());
  },
  _onSearch: function(text){
    if (text.trim()){
      WeatherActions.update(text);
    }
  }

});

module.exports = TodoApp;
