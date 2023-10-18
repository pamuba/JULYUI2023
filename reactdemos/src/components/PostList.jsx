import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts : [],
       count:1
    }
    this.inputRef = React.createRef()
  }
  componentDidMount() {
    
    console.log("first")
    axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then(response=>{
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch( error => {
            console.log(error.message)
        })
  }
  handler = () => {
        
        this.setState({
            count: this.inputRef.current.value
        })
        const {count} = this.state
        axios.get("https://jsonplaceholder.typicode.com/posts/"+count)
        .then(response=>{
            console.log(response)
            this.setState({posts: response})
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
        <input type="text" ref={this.inputRef}/><button onClick={this.handler}>GET</button>
        <hr></hr>
        {
            // posts.length ? 
            posts.map(post => <div key={post.id}>{post.title}</div>)
            // null
        }
      </>
    )
  }
}

export default PostList