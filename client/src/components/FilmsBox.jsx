var React = require( 'react' );
var FilmsList = require( './FilmsList' );
var sampleData = [
  {id: 1, name: "The Man Who Fell To Earth" },
  {id: 2, name: "Don't Breathe"},
  {id: 3, name: "Ben-Hur"},
  {id: 4, name: "Captain Fantastic"},
]

var FilmsBox = React.createClass({

  getInitialState: function(){
    return{ data: sampleData }
  },

  render: function() {

    return(
      <div className='film-box'>
        <h1>Films</h1>
        <FilmsList data={ this.state.data } />
      </div>
    )
  }
});

module.exports = FilmsBox;