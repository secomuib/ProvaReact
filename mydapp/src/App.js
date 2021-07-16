import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import myContract from './myContract';
import React from "react";

class App extends React.Component {
  
  state = { 
    owner: '',
    contractAddress: '',
    myNewNumber: '',
    addTenToMyNumber: '',
    message: ''
  };

  async componentDidMount() { 
    const owner = await myContract.methods.owner().call();
    const contractAddress = await myContract.methods.contractAddress().call();
    const myNewNumber = await myContract.methods.myNewNumber().call();
    const addTenToMyNumber = await myContract.methods.addTenToMyNumber().call();

    this.setState({owner, contractAddress, myNewNumber, addTenToMyNumber});
  }

  onSubmit = async(event) => { 
    event.preventDefault();
    
    this.setState({ message: 'Waiting on transaction success...'});
    
    const accounts = await web3.eth.getAccounts(); 
    await myContract.methods.addNumber(this.state.value).send({ 
      from: accounts[0]
    });
    
    const myNewNumber = await myContract.methods.myNewNumber().call();
    this.setState({ 
      message: 'You have submitted your number!',
      myNewNumber: myNewNumber
    });
  };

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
          <p>
            The contract address is: {this.state.contractAddress}
          </p>
          <form onSubmit={this.onSubmit}> 
            <div>
              <label>Type in the number you want to add:</label> 
              <input 
              value={this.state.value}
              onChange={event => this.setState({value: event.target.value })}
              />
            </div>
            <button>click to confirm</button> 
          </form>
          <p>
            Message: {this.state.message}
          </p>
          <p>
            The stored number is: {this.state.myNewNumber}
          </p>
          <p>
            Adding 10 to my number equals: {this.state.addTenToMyNumber}
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
