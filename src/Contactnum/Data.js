import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts.js';
class Data extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
}
  componentDidMount() {
    axios.get('https://api.rootnet.in/covid19-in/contacts')
    .then(response =>{console.log(response);
      const posts = response.data.data.contacts.regional;
      const updatedPosts = posts.map(post => {
          return {
              ...post,
          }
    })
    this.setState({posts: updatedPosts}                 );
    
})  .catch(error => { //if any error happen it could be handled by catch
  this.setState({
      error: true
  })
})
}
  render(){
    let posts = <p style={{textAign:'center'}}>Something went wrong!</p>
    if(!this.state.error){
      posts = this.state.posts.map(post => {
          return <Posts
          state = {post.loc}
          number = {post.number}
      />
  })
}
    return (
      <div className="App">
        {posts}
        <h1>Hello</h1>
      </div>
    );
}
}

export default Data;