import React, { Component } from 'react';
import classnames from 'classnames';

class NavBar extends Component{

	render(){
	  // const { className, ...props } = this.props;
		return (
			<div>
				<a href="/">Home</a>
				<a href="/about">About</a>
			</div>
		);
	}
}

export default NavBar;
