var React = require('react');

var TodoList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return (
        <div className='piece' key={item.id}>
          <span className='pieceText'>{item.text}</span>
        </div>
      );
    };
    return <div className='carWrap'>{this.props.items.map(createItem)}</div>;
  }
});
//<span className='pieceClose' onCLick={this.props.remove.bind(item)}>×</span>
module.exports = TodoList;