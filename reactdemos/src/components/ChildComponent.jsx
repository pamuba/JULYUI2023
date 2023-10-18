import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.greetHandler('Hello from Child')}>Greet Parent</button>
      </div>
    )
  }
}

export default ChildComponent