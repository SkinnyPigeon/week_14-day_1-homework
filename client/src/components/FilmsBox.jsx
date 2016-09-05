var React = require( 'react' );
var FilmsList = require( './FilmsList' );
var sampleData = [
  {id: 1, name: "The Man Who Fell To Earth", URL: "http://www.imdb.com/title/tt0074851/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1NNY5KQYFAGCV40637N3&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0" },
  {id: 2, name: "Don't Breathe", URL: "http://www.imdb.com/title/tt4160708/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1NNY5KQYFAGCV40637N3&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t1"},
  {id: 3, name: "Ben-Hur", URL: "http://www.imdb.com/title/tt2638144/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1NNY5KQYFAGCV40637N3&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t3"},
  {id: 4, name: "Captain Fantastic", URL: "http://www.imdb.com/title/tt3553976/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1NNY5KQYFAGCV40637N3&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t5"},
]

var FilmsBox = React.createClass({

  getInitialState: function(){
    return{ data: sampleData }
  },

  handleSeeFilmsTimes: function() {
    console.log( "You have bought 3206 tickets to Ben-Hur" );
  },

  render: function() {

    return(
      <div className='film-box' class="films">
        <h1>Films</h1>
        <FilmsList data={ this.state.data } handleSeeFilmsTimes={ this.handleSeeFilmsTimes }/>
      </div>
    )
  }
});

module.exports = FilmsBox;