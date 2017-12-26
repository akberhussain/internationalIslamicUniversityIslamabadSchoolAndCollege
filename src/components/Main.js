import React, { Component } from 'react';
import NavBar from './Navigation';
import classnames from 'classnames';

class Main extends Component{
	static propTypes = {}
  	static defaultProps = {}
  	state = {}

	render(){
	  const { className, ...props } = this.props;
		return(
      // after classnames {...props}
      <div className={classnames('Home', className)}>
        <div>
            {this.props.children}
        </div>
      </div>
    );
	}

}

export default Main;