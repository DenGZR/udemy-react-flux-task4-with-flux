//API call:
//     api.openweathermap.org/data/2.5/forecast/daily?q={city name},{country code}&cnt={cnt}
//cnt number of days returned (from 1 to 16)
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
var ApiKey = '&APPID=125796edd2c7679fe67589bdea4f5225';
var cnt = '&cnt=7';


var service = {
    get: function(url){
        console.log('request Url : ' + baseUrl + url + ApiKey + cnt);
        return fetch(baseUrl + url + ApiKey + cnt)
            .then(function(Response){
                //console.log('res :  ',Response);
                return Response.json();
            })
    }
};

module.exports = service;