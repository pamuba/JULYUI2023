import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <>
        <div>Welcome {this.props.name} aka {this.props.heroName}</div>
        {this.props.children}
      </>
      
    )
  }
}

export default Welcome