var React = require( 'react' );

propTypes: {
  name: React.PropTypes.string.isRequired
}

var Films = React.createClass({

  render: function() {

    return(
      <div className='films'>
        <h2 className='film-name'>
          {this.props.name}
        </h2>
        {this.props.children}
        <button type="button" onClick={ this.deleteComment }>Nowep</button>
      </div>
    )
  }
});

module.exports = Films;