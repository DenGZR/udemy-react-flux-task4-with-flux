var React = require('react');
var TodoActions = require('../actions/weatherActions');

var CitySearch = React.createClass({

    // propTypes: {
    //     onSearch: ReactPropTypes.func.isRequired,
    //     value: ReactPropTypes.string
    // },

    getInitialState: function() {
        return {
          value: this.props.value || ''
        };
      },

    render: function() {

        return (
            <div className="city-search">
                <form onSubmit={this._save}>
                    <input
                        type="text"
                        className="city-search-input"
                        placeholder={this.state.value}
                        onChange={this._onChange}
                        onClick={this._clear}
                        onBlur={this._onBlur}
                        value={this.state.value}/>
                    <button className="fa-stack fa-lg city-search-button" onClick={this._save}>
                        <i className="fa fa-search"></i>
                    </button >
                </form>

            </div>
        )
    },

    _save: function(event) {
        event.preventDefault();
        this.props.onSearch(this.state.value);
    },
    _clear: function(event) {
        event.target.value = '';
        event.target.placeholder = '';
    },
    _onBlur: function(event) {
        event.target.value = this.state.value;
    },
    _onChange: function(event) {
        event.preventDefault();
        this.setState({
            value: event.target.value
        });
    }
});

module.exports = CitySearch;