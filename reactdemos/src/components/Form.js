import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comments:'',
       topic:''
    }
  }
  handleName = (event) => {
    this.setState({
        username: event.target.value
    })
  }
  handleComments = (event) => {
    this.setState({
        comments: event.target.value
    })
  }
  handleTopic = (event) => {
    this.setState({
        topic: event.target.value
    })
  }
  display = () => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
  }
  render() {
    return (
      <>
       <form onSubmit={this.display}>
       <div>
        <label>Username</label>
        <input type="text" value={this.state.username} onChange={this.handleName}></input>
       </div>
       <div>
        <label>Comments</label>
        <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
       </div>
       <div>
        <label>Topic</label>
        <select value={this.state.topic} onChange={this.handleTopic}>
            <option value="rect">Select One</option>
            <option value="rect">React</option>
            <option value="angular">Angular</option>
            <option value="VueJS">VueJS</option>
        </select>
       </div>
       <hr>
       </hr>
       <button type="submit">Submit</button>
      </form>
      </>
    )
  }
}

export default Form