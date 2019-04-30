import React, { Component } from 'react';

class Box extends Component {
  handleRemove = () => {
    this.props.removeBox(this.props.id)
  }

  render() {
    return(
      <div>
        <div style={{
          backgroundColor: this.props.color,
          width: `${this.props.width}em`,
          height: `${this.props.height}em`
        }}/>
        <button onClick={this.handleRemove}>X</button>
      </div>
    )
  }
}

export default Box;
