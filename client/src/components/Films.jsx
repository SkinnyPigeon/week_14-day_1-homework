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
      </div>
    )
  }
});

module.exports = Films;