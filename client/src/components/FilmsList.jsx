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
        <Films key={ film.id } >
          <a href={ film.URL } > { film.name } </a>
        </Films>
      )
    })

    return(
      <div className='film-list' class="films">
        { filmNodes }
        <button type="button" onClick={ this.handleSeeFilmsTimes }>Get Showtimes >></button>
      </div>
    )
  }
});

module.exports = FilmsList;