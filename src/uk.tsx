import React, { Component, MouseEvent } from "react";
import "./ImagePZ.css";

const MAX_ZOOM = 5;
const MIN_ZOOM = 1;
let DEFAULT_ZOOM = 1;
let cx: any;
let cy: any;
let zoomV = 1;
let heightV = 30;
let widthV = 30;
let dragImg = new Image(0,0);
export default class ImagePZ extends Component {
    constructor(props: Readonly<{}>) {super(props);}
  state = {};

  componentDidMount() {
    dragImg.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  }

  imageZoom = (e: React.MouseEvent) => {
    let img = document.getElementById("myimage");
    let imgSrc = (document.getElementById("myimage") as HTMLImageElement).src;
    let imgWH = document.getElementById("myimage") as HTMLCanvasElement;
    let lens = document.getElementById("img-zoom-lens");
    let result = document.getElementById("img-zoom-result");
    // console.log("Img " + img);
    // console.log("Lens " + lens);
    // console.log("result " + result);

    /*calculate the ratio between result DIV and lens:*/
    cx = (result!.offsetWidth / lens!.offsetWidth) * zoomV;
    cy = (result!.offsetHeight / lens!.offsetHeight) * zoomV;
    /*set background properties for the result DIV:*/

    result!.style.backgroundImage = "url('" + imgSrc + "')";
    result!.style.backgroundSize =
      imgWH.width * cx + "px " + imgWH!.height * cy + "px";

    /*execute a function when someone moves the cursor over the image, or the lens:*/
  };




  moveLens = (e: React.DragEvent) => {
    let img = document.getElementById("myimage");
    let imgSrc = (document.getElementById("myimage") as HTMLImageElement).src;
    let imgWH = document.getElementById("myimage") as HTMLCanvasElement;
    let lens = document.getElementById("img-zoom-lens");
    let result = document.getElementById("img-zoom-result");

    /*prevent any other actions that may occur when moving over the image:*/
    e.dataTransfer.setDragImage(dragImg, 0, 0);
    // e.target.addEventListener("dragstart", function(event) {
    //     event.dataTransfer.setDragImage(img, 0, 0);
    // }, false)

  
    // e.preventDefault();
    // e.stopPropagation();
    /*get the cursor's x and y positions:*/

    var a;
    var x = 0;
    var y = 0;
    //   e = e || window.event;

    a = img!.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    /*calculate the position of the lens:*/
    x = x - lens!.offsetWidth / 2;
    y = y - lens!.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (x > imgWH!.width - lens!.offsetWidth) {
      x = imgWH!.width - lens!.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > imgWH!.height - lens!.offsetHeight) {
      y = imgWH!.height - lens!.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /*set the position of the lens:*/
    lens!.style.left = x + "px";
    lens!.style.top = y + "px";

    /*display what the lens "sees":*/
    result!.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    // e.dataTransfer.setDragImage(dragImg, 0, 0);
  }



  getCursorPos = (e: any) => {
    let img = document.getElementById("myimage");

    var a,
      x = 0,
      y = 0;
    //   e = e || window.event;

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
    zoomV++;
    widthV = widthV - 10;
    heightV = heightV - 10;
    let img = document.getElementById("myimage");
    let imgSrc = (document.getElementById("myimage") as HTMLImageElement).src;
    let imgWH = document.getElementById("myimage") as HTMLCanvasElement;
    let lens = document.getElementById("img-zoom-lens");
    let result = document.getElementById("img-zoom-result");
    cx = (result!.offsetWidth / lens!.offsetWidth) * zoomV;
    cy = (result!.offsetHeight / lens!.offsetHeight) * zoomV;
    /*set background properties for the result DIV:*/

    lens!.style.height = heightV + "px";
    lens!.style.width = widthV + "px";

    // result!.style.backgroundImage = "url('" + imgSrc + "')";
    result!.style.backgroundSize =imgWH.width * cx + "px " + imgWH!.height * cy + "px";


  };

  zoomOut = () => {
    zoomV--;
    widthV = widthV + 10;
    heightV = heightV + 10;
    let img = document.getElementById("myimage");
    let imgSrc = (document.getElementById("myimage") as HTMLImageElement).src;
    let imgWH = document.getElementById("myimage") as HTMLCanvasElement;
    let lens = document.getElementById("img-zoom-lens");
    let result = document.getElementById("img-zoom-result");
    cx = (result!.offsetWidth / lens!.offsetWidth) * zoomV;
    cy = (result!.offsetHeight / lens!.offsetHeight) * zoomV;
    /*set background properties for the result DIV:*/

    lens!.style.height = heightV + "px";
    lens!.style.width = widthV + "px";

    result!.style.backgroundImage = "url('" + imgSrc + "')";
    result!.style.backgroundSize =
      imgWH.width * cx + "px " + imgWH!.height * cy + "px";
  };

  public render() {
    

    return (
        
        <div>
        <div id="img-zoom-result" className="img-zoom-result">
        <div className="img-zoom-lens"id="img-zoom-lens"  onDragStart={this.moveLens} onDrag={this.moveLens} onDragEnd={this.moveLens} draggable={true} ></div>
           <div className="draggable" id="draggable"> <img className="myimage"id="myimage" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/1_The_Opera_House_in_Sydney.jpg" onMouseMove={this.imageZoom} /></div>
          
        </div>
        <button onClick={this.zoomIn}>Zoom In </button>
        <button onClick={this.zoomOut}>Zoom Out </button>
        </div>

    
    );
  }
}
