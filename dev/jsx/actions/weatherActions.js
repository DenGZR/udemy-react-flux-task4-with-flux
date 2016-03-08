var AppDispatcher = require('../dispatcher/AppDispatcher');
var WeatherConstants = require('../constants/WeatherConstants');

var WeatherActions = {

  update: function(text) {
    AppDispatcher.dispatch({
      actionType: WeatherConstants.FORECAST_UPDATE,
      city: text
    });
  }

};

module.exports = WeatherActions;
