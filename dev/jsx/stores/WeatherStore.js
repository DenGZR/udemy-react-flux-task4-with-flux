var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var WeatherConstants = require('../constants/WeatherConstants');
var assign = require('object-assign');
var HTTP = require('../services/httpservice');

var CHANGE_EVENT = 'change';

var _forecast = {
                city: {
                    id: 0,
                    name: "",
                    coord: {
                        lon: 0,
                        lat: 0
                    },
                    country: "",
                    population: 0,
                    sys: {
                        population: 0
                    }
                },
                cod: "200",
                message: 0.009,
                cnt: 5,
                list: [
                    {
                        dt: 1456304400,
                        temp: {
                            day: 273.15,
                            min: 279.15,
                            max: 281.97,
                            night: 281.15,
                            eve: 281.61,
                            morn: 279.15
                        },
                        pressure: 1007.34,
                        humidity: 99,
                        weather: [
                            {
                                id: 501,
                                main: "Rain",
                                description: "moderate rain",
                                icon: "10d"
                            }
                        ],
                        speed: 0,
                        deg: 0,
                        clouds: 92,
                        rain: 7.8
                    }
                ]
};


var WeatherStore = assign({}, EventEmitter.prototype, {

  getForecast: function() {
    return _forecast;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var city;

  switch(action.actionType) {

    case WeatherConstants.FORECAST_UPDATE:

      city = action.city;

      if (city !== '') {
        HTTP.get(city)
            .then(function(data){
                _forecast = data;
                WeatherStore.emitChange();
            });
      }

    break;


    default:
      // no op
  }
});

module.exports = WeatherStore;
