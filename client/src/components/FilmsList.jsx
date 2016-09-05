var React = require( 'react' );
var Films = require( './Films' );

propTypes: {
  id: React.PropTypes.number.isRequired
  name: React.PropTypes.string.isRequired
}

var FilmsList = React.createClass({

  handleSeeFilmsTimes: function() {
    this.props.handleSeeFilmsTimes();
  },

  render: function() {
    var filmNodes = this.props.data.map( function( film ) {
      return(
        <Films key={ film.id }>
          { film.name }
        </Films>
      )
    })

    return(
      <div className='film-list'>
        { filmNodes }
        <button type="button" onClick={ this.handleSeeFilmsTimes }>See Film Times</button>
      </div>
    )
  }
});

module.exports = FilmsList;