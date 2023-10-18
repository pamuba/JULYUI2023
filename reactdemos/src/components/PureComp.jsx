import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("****Pure Component******")
    return (
      <>
        <h2>Pure Component {this.props.name}</h2>
      </>
    )
  }
}

export default PureComp