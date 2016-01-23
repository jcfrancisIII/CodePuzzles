var React = require('react');
var ReactDOM = require('react-dom');
var Firebase = require("firebase");

var TodoList = require('./TodoList');

require('./../css/style.less');

var App = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },  
  componentWillMount: function() {
    this.firebaseRef = new Firebase("https://6car.firebaseio.com/items/");
    this.firebaseRef.on("child_added", function(dataSnapshot) {
      this.state.items.push(dataSnapshot.val());
      this.setState({
        items: this.state.items
      });
    }.bind(this));
  },
  onChange: function(e) {
    var textString = e.target.value;
    this.setState({text: textString});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.firebaseRef.push().set({
      text: this.state.text.toString(),
      id: Date.now()
    }, function(error) {
      if (error) {
        alert('Data could not be saved.' + error)
      }
    });
    this.setState({text: ''});
  },
  render: function() {
    return (
      <div id="App">
        <h3>6 Car</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} type='text' />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('main-container'));
