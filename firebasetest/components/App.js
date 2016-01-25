var React = require('react');
var ReactDOM = require('react-dom');
var Firebase = require("firebase");
var ReactFireMixin = require("reactfire");

var Canvas = require('./Canvas');

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
  render: function() {
    return (
      <div id="App">
        <Canvas items={this.state.items} />
        <h3>6 Car Canvas</h3>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('main-container'));
