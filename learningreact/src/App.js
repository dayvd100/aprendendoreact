import './App.css';
import { Component } from 'react';

class App extends Component {
  
  state = {
    posts: [
      {
      id: 1,
      title: "título 1",
      body:"corpo 1"
    },
    {
      id: 2,
      title: "título 2",
      body:"corpo 2"
    },
    {
      id: 3,
      title: "título 3",
      body:"corpo 3"
    },
  
  ]
  }

  render(){
    const { posts } = this.state;
    console.log(posts)
    return (
    <div className="App">
    {posts.map(nomeDoRetorno => <h1 key={nomeDoRetorno.id}>{nomeDoRetorno.title}</h1>)}
    </div>
  );
}
}
export default App;
