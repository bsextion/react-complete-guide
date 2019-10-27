import React, { Component } from "react";
import "./ImgZoom.css";

const MAX_ZOOM = 5;
const MIN_ZOOM = 1;
let DEFAULT_ZOOM = 1;

export default class ImgZoom extends Component {
  state = {
    transform: `scale(${DEFAULT_ZOOM})`,
    transformOrigin: "50%50%",
  };

  private handleZoomIn = () => {
    if (DEFAULT_ZOOM < MAX_ZOOM) {
      DEFAULT_ZOOM++;
    }
    this.setState({
      transform: `scale(${DEFAULT_ZOOM})`
    });
  };

  private handleZoomOut = () => {
    if (DEFAULT_ZOOM > MIN_ZOOM) {
      DEFAULT_ZOOM--;
    }
    this.setState({
      transform: `scale(${DEFAULT_ZOOM})`
    });
  };

  private handleMouseMove = (e: React.MouseEvent) => {
    let imgPic = document.getElementById("photo");
    let dimensions = imgPic!.getBoundingClientRect();
    let x = ((e.pageX - imgPic!.offsetLeft) / dimensions.width) * 100;
    let y = ((e.pageY - imgPic!.offsetTop) / dimensions.height) * 100;

    this.setState({
      transformOrigin: `${x + "%" + y + "%"}`
    });
  };

  public render() {
    return (
      <div className="tiles">
        <div className="tile">
          <div
            className="photo"
            id="photo"
            style={this.state}
            onMouseMove={this.handleMouseMove}
             > 
             {this.props.children}
          </div>
        </div>
        <button onClick={this.handleZoomIn}>Zoom In</button>
        <button onClick={this.handleZoomOut}>Zoom Out</button>
      </div>
    );
  }
}
