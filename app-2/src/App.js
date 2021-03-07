import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      strings: ['this', 'is', 'my', 'app,', 'it', 'reads', 'out', 'strings']
    }
  }

  render() {
      let stringList = this.state.strings.map((elem, i) => {
        return <h2 key={i}>{elem}</h2>;
      });

      return <div className='App'>{stringList}</div>
  }
}


export default App;
