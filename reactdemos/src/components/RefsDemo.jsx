import React, { Component } from 'react'

export class RefsDemo extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
        text:''
    }
    this.inputRef = React.createRef()

    this.cbRef = null 
    this.setcbRef = (element) => {
        this.cbRef = element
    }
  }

  componentDidMount(){
    // this.inputRef.current.focus()
    this.cbRef.focus()
  }
  clickHandler = () => {
    this.setState({
        text:this.inputRef.current.value
    })
    alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setcbRef}/>
        <button onClick={this.clickHandler}>CLICK</button>
      </div>
    )
  }
}

export default RefsDemo