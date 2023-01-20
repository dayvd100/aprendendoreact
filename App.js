import './App.css';
import { Component } from 'react';

class App extends Component {
  
  state = {
    posts: []
  }

  componentDidMount(){
    this.carregarPosts();
  }

  carregarPosts = async () => {
    const respostaPosts = fetch('https://jsonplaceholder.typicode.com/posts');
    const respostaphotos = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([respostaPosts, respostaphotos]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url}
    })

    this.setState({posts: postsAndPhotos})

  }

  render(){
    const { posts } = this.state;
    return (
    <section className='container'>
     <div className="posts">
     
    {posts.map(post => (
      <div className='post'>
      <div key={post.id} className="post-card">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <img src={post.cover}/>
      </div>
      </div>
    ))}
    </div> 
    </section>
    
  );
}
}
export default App;
