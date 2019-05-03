import React, { Component } from 'react';

class Box extends Component {
  handleRemove = () => {
    this.props.removeBox(this.props.id)
  }

  render() {
    return(
      <div>
        <div style={{ //this creates the inline css style
          backgroundColor: this.props.color, //this
          width: `${this.props.width}em`, //this allows the user to type in their own dimensions for width
          height: `${this.props.height}em` //this allows the user to type in their own dimensions for height
        }}/>
        <button onClick={this.handleRemove}>X</button> //removes the box through the handleRemove handler
      </div>
    )
  }
}

export default Box;
