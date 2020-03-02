import React, { Component } from 'react'

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    }
  }

  newMessage(value) {
    this.setState({message: value});
  }


  render() {
    return (
      <div className="Hello">
        <input onChange={e => this.newMessage(e.target.value)} type="text"/>
        <p>{this.state.message}</p>

      </div>
    );
  }
}

export default Hello;