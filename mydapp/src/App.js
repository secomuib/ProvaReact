import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import myContract from './myContract';
import React from "react";

class App extends React.Component {
  
  state = { owner: '' };

  async componentDidMount() { 
    const owner = await myContract.methods.owner().call();
    this.setState({owner}); 
  }

  render()
  {
    //function App() {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The owner address is: {this.state.owner}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
