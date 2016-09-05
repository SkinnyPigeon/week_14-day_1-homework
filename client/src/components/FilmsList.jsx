var React = require( 'react' );
var Films = require( './Films' );

propTypes: {
  id: React.PropTypes.number.isRequired
  name: React.PropTypes.string.isRequired
}

var FilmsList = React.createClass({

  render: function() {
    var filmNodes = this.props.data.map( function( film ) {
      return(
        <Film key={ film.id } }>
          { film.name }
          <br></br>
        </Film>
      )
    }.bind( this ))

    return(
      <div className='film-list'>
        { filmNodes }
      </div>
    )
  }
});

module.exports = FilmsList;