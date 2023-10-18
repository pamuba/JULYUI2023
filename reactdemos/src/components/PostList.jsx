import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts : []
    }
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch( error => {
            console.log(error.message)
        })
  }
  render() {
    const {posts} = this.state
    return (
      <>
        <h2>List of Posts</h2>
        <hr></hr>
        <input type="text"/><button>GET</button>
        <hr></hr>
        {
            posts.length ? 
            posts.map(post => <div key={post.id}>{post.title}</div>):
            null
        }
      </>
    )
  }
}

export default PostList