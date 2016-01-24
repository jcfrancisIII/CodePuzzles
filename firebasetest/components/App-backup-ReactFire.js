var React = require('react');
var ReactDOM = require('react-dom');
var Firebase = require("firebase");
var ReactFireMixin = require("reactfire");

var TodoList = require('./TodoList');

require('./../css/style.less');

var ref = new Firebase("https://6car.firebaseio.com/items/");

var App = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      items: [],
      text: ''
    };
  },  
  componentWillMount: function() {
    this.bindAsArray(ref, 'items');
  },
  onChange: function(e) {
    var textString = e.target.value;
    this.setState({text: textString});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.firebaseRefs.items.push({
      text: this.state.text,
      id: Date.now()
    });
    this.setState({text: ''});
  },
  render: function() {
    return (
      <div id="App">
        <h3>6 Car</h3>
        <TodoList items={this.state.items} key={this.state.items.id} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} type='text' />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('main-container'));
