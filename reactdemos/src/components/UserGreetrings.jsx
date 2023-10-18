import React, { Component } from 'react'

export class UserGreetrings extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false 
    }
  }
 
  render() {
    // let message
    // return this.state.isLoggedIn?(<div>UserGreetrings from John</div>):
    //    (message = <div>UserGreetrings from User</div>)
    return this.state.isLoggedIn && <div>UserGreetrings from John</div>
    }
}

export default UserGreetrings