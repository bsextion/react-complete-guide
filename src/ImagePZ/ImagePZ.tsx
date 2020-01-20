import React, { Component, MouseEvent } from "react";
import "./ImagePZ.css";


const maxZoom = 5;
const minZoom = 1;
let zoomVal = 1;
let cx: any;
let cy: any;
let dragImg = new Image(0, 0);
let img;
let lens;
let result;


export default class ImagePZ extends React.Component {
  imageRef: any;
  lensRef: any;
  resultRef: any;
  heightV = 30;
  widthV = 30;  

  constructor(props: any) {
    super(props);

    this.imageRef = React.createRef();
    this.lensRef = React.createRef();
    this.resultRef = React.createRef()
  }
  state = {
     width: `(${this.heightV})px`,
  height: `(${this.widthV})px`}
  ;

  
  componentDidMount() {
    // this.map = L.map('map', {
    //   center: [51.505, -0.09],
    //   zoom: 5,
    // })

    dragImg.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  }

  imageZoom = (e: React.MouseEvent) => {
    img = this.imageRef.current;
    lens = this.lensRef.current;
    result = this.resultRef.current;

    cx = (result!.offsetWidth / lens!.offsetWidth) * zoomVal;
    cy = (result!.offsetHeight / lens!.offsetHeight) * zoomVal;
    /*set background properties for the result DIV:*/
    result!.style.backgroundImage = "url('" + img.src + "')"
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  };

  moveLens = (e: React.DragEvent) => {
    img = this.imageRef.current;
    lens = this.lensRef.current;
    result = this.resultRef.current;

    /*Hide ghost image*/
    e.dataTransfer.setDragImage(dragImg, 0, 0);

    var a;
    var x = 0;
    var y = 0;
    //   e = e || window.event;

    a = img.getBoundingClientRect();

    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    /*calculate the position of the lens:*/
    x = x - lens.offsetWidth / 2;
    y = y - lens.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }


    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";

    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    lens.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";

    lens.style.backgroundSize = "background-size: contain;";

  };

  getCursorPos = (e: any) => {
    img = this.imageRef.current;

    var a,
      x = 0,
      y = 0;
    e = e || window.event;

    a = img!.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  };

  zoomIn = () => {
    zoomVal++;
    this.widthV = this.widthV - 10;
    this.heightV = this.heightV - 10;
    let img = document.getElementById("myimage");
    let imgSrc = (document.getElementById("myimage") as HTMLImageElement).src;
    let imgWH = document.getElementById("myimage") as HTMLCanvasElement;
    let lens = document.getElementById("img-zoom-lens");
    let result = document.getElementById("img-zoom-result");
    cx = (result!.offsetWidth / lens!.offsetWidth) * zoomVal;
    cy = (result!.offsetHeight / lens!.offsetHeight) * zoomVal;
    /*set background properties for the result DIV:*/

    lens!.style.height = this.heightV + "px";
    lens!.style.width = this.widthV + "px";
  

    // result!.style.backgroundImage = "url('" + imgSrc + "')";
    result!.style.backgroundSize =
    imgWH.width * cx + "px " + imgWH!.height * cy + "px";
  };

  zoomOut = () => {
    zoomVal--;
    this.widthV = this.widthV + 10;
    this.heightV = this.heightV + 10;
    let img = document.getElementById("myimage");
    let imgSrc = (document.getElementById("myimage") as HTMLImageElement).src;
    let imgWH = document.getElementById("myimage") as HTMLCanvasElement;
    let lens = document.getElementById("img-zoom-lens");
    let result = document.getElementById("img-zoom-result");
    cx = (result!.offsetWidth / lens!.offsetWidth) * zoomVal;
    cy = (result!.offsetHeight / lens!.offsetHeight) * zoomVal;
    /*set background properties for the result DIV:*/



    result!.style.backgroundImage = "url('" + imgSrc + "')";
    result!.style.backgroundSize =
      imgWH.width * cx + "px " + imgWH!.height * cy + "px";
  };

  public render() {

    const lensStyle = {
      width: `(${this.heightV})px`,
      height: `(${this.widthV})px`
    }

    return (
      <div className="img-zoom-container">
        <div ref={this.resultRef} id="img-zoom-result" className="img-zoom-result">
          <div id="wrap">
            <div ref={this.lensRef} className="img-zoom-lens" id="img-zoom-lens" onDragStart={this.moveLens} onDrag={this.moveLens} onDragEnd={this.moveLens} draggable={true} style={lensStyle}></div>
            <img ref={this.imageRef} id="myimage"
              src="https://i.stack.imgur.com/7kczi.jpg" width="75"
              height="60" onMouseMove={this.imageZoom}></img>
          </div>

        </div>
        <button onClick={this.zoomOut}>Zoom In </button>
        <button onClick={this.zoomOut}>Zoom Out </button>
      </div>





    );
  }
}
