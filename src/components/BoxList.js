import React, { Component } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component {
  state = {
    boxes: []
  }

  //adds the newBox to the current array of boxes in state
  create = (newBox) => {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }

  //makes a new array of boxes that does not contain the id that was passed in
  remove = (id) => {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  render(){
  const boxes = this.state.boxes.map(box => (
    <Box
      id={box.id} //id used for code
      key={box.id} //specifically for React only
      width={box.width}
      height={box.height}
      color={box.color}
      removeBox={this.remove}
    />
  ));

    //createBox is passed down to NewBoxForm so it can be used in that componenet
    return(
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxForm createBox={this.create}/>
        {boxes}
      </div>
    )
  }
}

export default BoxList;
