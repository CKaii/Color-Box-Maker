import React, { Component } from 'react';
import uuid from 'uuid/v4'

class NewBoxForm extends Component {
  state = {
    height: "",
    width: "",
    color: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //takes data from <form> and passes it to boxlist while calling a method that addes it to the state in BoxList.js
  handleSubmit = (e) => {
    e.preventDefault(); //prevents the page from refreshing/rerendering
    const newBox = {...this.state, id: uuid()} //adds an id to the current state of newBox
    this.props.createBox(newBox); //prop passed down from BoxList
    this.setState({ //resets the form to a blank state
      height: "",
      width: "",
      color: ""
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='height'>Height: </label>
          <input
            type='text'
            name="height"
            value={this.state.height}
            id='height'
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='width'>Width: </label>
          <input
            type='text'
            name="width"
            value={this.state.width}
            id='width'
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='color'>Color: </label>
          <input
            type='text'
            name="color"
            value={this.state.color}
            id='color'
            onChange={this.handleChange}
          />
        </div>
        <button>Add a New Box</button>
      </form>
    )
  }
}

export default NewBoxForm;
