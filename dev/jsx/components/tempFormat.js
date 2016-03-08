var tempFormat = function( temp, convertToCelsius ) {

    var dt;

    dt = parseInt(temp, 10);

    if( convertToCelsius ) {
       dt =  dt - 273,15;
    }

    return Math.round( dt );
};


module.exports = tempFormat;