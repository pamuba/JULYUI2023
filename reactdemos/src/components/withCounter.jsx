
import React, { Component } from 'react'
const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          clickHandler = () => {
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
          }
        render() {
            return <OriginalComponent count={this.state.count} 
            clickHandler={this.clickHandler} name="John Wick"/>
        }
    }
    return NewComponent
}

export default UpdatedComponent