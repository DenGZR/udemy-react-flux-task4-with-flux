var React = require('react');
var moment = require('moment');

var ToDayDate = React.createClass({

    render: function() {

        var dateNow = moment().format('DD MMM YYYY');

        return (
            <div className="to-day-date" >
                <span>today {dateNow}</span>
            </div>
        );
    }
});

module.exports = ToDayDate;