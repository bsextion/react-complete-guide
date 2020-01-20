import React, { Component } from "react";
import "./leaflet.css";
import * as L from "leaflet";
import ImgZoom from "../ImgZoom/ImgZoom";

let map: any = undefined;
let imgElement: any = undefined;
let brightValue = 100;
export default class Leaflet extends Component {
  mapRef: any;
  state = {};

  constructor(props: any) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.initMap();

    // const mapNode = this.mapRef.current.firstElementChild;

    //change the filter of the image
    //    imgNode = mapNode.children[2].lastElementChild.style.filter=`brightness(${brightValue}%)`;

    //     console.log(imgNode);
  }

  private initMap() {
    map = L.map("mapid", {
      minZoom: 1,
      maxZoom: 4,
      center: [0, 0],
      zoom: 1,
      maxBoundsViscosity: 1,
      crs: L.CRS.Simple,
      attributionControl: false,
      zoomControl: false
    });

    var img = L.imageOverlay("http://kempe.net/images/newspaper-big.jpg", [
      [0, 0],
      [432, 576]
    ]); //initial size ( at zoom 0, double size at zoom 1 )
    img.addTo(map);
    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(new L.LatLngBounds([0, 0], [432, 576])); // prevent panning outside the image area
    imgElement = img.getElement();
  }

  applyFilter() {
    imgElement.style.filter = `brightness(${brightValue}%)`;
  }

  private handleZoomIn = () => {};

  private handleZoomOut = () => {
    brightValue = brightValue + 10;
   this.applyFilter();
  };

  private handleMouseMove = (e: React.MouseEvent) => {};

  public render() {
    return (
      <div className="tiles">
        <div className="tile">
          {/* <div className="photo"> */}
          <div id="mapid">{/* </div> */}</div>
        </div>
        {/* <input type="range" min="0" max="200" value="0" className="slider" id="brightness-slider"/> */}
        {/* <button>Reset</button> */}
        <button onClick={this.handleZoomIn}> Zoom In</button>
        <button onClick={this.handleZoomOut}>Zoom Out</button>
      </div>
    );
  }
}
