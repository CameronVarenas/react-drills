import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Components/Image';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Image url={'https://media.discordapp.net/attachments/337234876854042625/796942938772340806/cover1.png?width=1202&height=676'} />
      </div>
    );
  }
}

export default App;