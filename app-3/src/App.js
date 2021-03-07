import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      strings: ['this', 'is', 'my', 'app,', 'it', 'reads', 'out', 'strings']
    };
  }

  handleChange(filter) {
    this.setState({filterString: filter})
  }

  render() {
    let stringsList = this.state.strings
    .filter((elem, i) => {
      return elem.includes(this.state.filterString)
    })
    .map((elem, i) => {
      return <h2 key={i}>{elem}</h2>
    })

    return (
      <div className='App'>
        <input onChange={e => this.handleChange(e.target.value)} type='text' />
        {stringsList}
      </div>
    )
  }
}

export default App;
