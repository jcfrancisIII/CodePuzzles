import React, {Component} from 'react';


export default class Nav extends Component {
  render() {
    return (
      <ul id='Nav'>
        {
        	this.props.data-navLinks.map(function(link){
        		return <li key={link.id}><a href={'/post/' + link.id}>{link.title}</a></li>
        	})
        }
      </ul>
    )
  }
}


