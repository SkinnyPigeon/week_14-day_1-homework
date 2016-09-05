var React = require( 'react' );

propTypes: {
  name: React.PropTypes.string.isRequired
}

var Films = React.createClass({

  render: function() {

    return(
      <div className='comment'>
        <h2 className='comment-author'>
          {this.props.author}
        </h2>
        {this.props.children}
        <button type="button" onClick={ this.deleteComment }>Nowep</button>
      </div>
    )
  }
});

module.exports = Comment;