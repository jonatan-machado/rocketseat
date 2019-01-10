import React, { Component } from 'react';
import { render } from 'react-dom';

import Button from './Button';
import './style.scss';

class App extends Component {
	state = {
	  counter: 0,
	};

	hanndleClick = () => {
	  this.setState({
	    counter: this.state.counter + 1,
	  });
	};

	render() {
	  return (
  <div>
    <h1>Hello Rocketseat</h1>
    <Button onClick={this.hanndleClick}>Somar</Button>
    <h2>{this.state.counter}</h2>
  </div>
	  );
	}
}

render(<App />, document.getElementById('app'));
