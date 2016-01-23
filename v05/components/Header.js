import React, {Component} from 'react';

import Title from './Title';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <div id='Header' className='row'>
        <Title />
        <Nav />
      </div>
    )
  }
}


