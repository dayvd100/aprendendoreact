import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.handlePClick = this.handlePClick.bind(this);
    this.state = {
      name: "Dayvd Allyson",
      counter: 0
    }
 }

  handlePClick() {
    this.setState({ name: "Dayvd100"});
  }
  
  handleAClick = (event) => {
    event.preventDefault();
    const counter = this.state.counter;
    this.setState({counter: counter+1})
    console.log(counter);
    
  }

  render(){
    const {name, counter} = this.state;
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick = {this.handlePClick}>
        {name} {counter}
        </p>
        <a onClick={this.handleAClick}
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
