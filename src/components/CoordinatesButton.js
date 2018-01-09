// Code CoordinatesButton Component Here
import React from 'react';


export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let x = event.screenX
    let y = event.screenY

    let cor = [x,y]

    this.props.onReceiveCoordinates(cor)
    
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }
}
