import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

require('./../css/style.less');

export default class App extends Component {
  render() {
    return (
      <div id='App'>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
