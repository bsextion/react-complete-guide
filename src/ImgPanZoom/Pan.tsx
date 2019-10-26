import React, { Component } from 'react'
import './Pan.css'

// let children = document.getElementById('photo')

//https://codepen.io/ccrch/pen/yyaraz

//look at transform origin and how it affects
export default class Pan extends Component {
  state = {
    transformOrgin: '20%20%' ,
    transform: 'scale(1)',  
  }


  private handleMouseOver = (e: React.MouseEvent<EventTarget>) => {
    console.log('Before', e.target)
    this.setState({
     transform: 'scale(1.25)'
    });

    // return (
    //   <div className='photo'>
         
    //   </div>
  // )

 

  }

  private handleMouseOut = (e: React.MouseEvent<EventTarget>) => {

    this.setState({
      transform: 'scale(1)'   
    
     });
  }

  private handleMouseMove = (e: React.MouseEvent) => {
    let imgPic = document.getElementById('haha');
    let dimensions = imgPic!.getBoundingClientRect();
      //imgPic!.offsetLeft / imgPic!.clientWidth * 100 + '%'
      console.log(dimensions.width)
 

    // const { left, top, width, height } = e.target.getBoundingClientRect()
    // const matrixData = this.getNewMatrixData(e.pageX, e.pageY);
    console.log( ` ${e.pageX - imgPic!.offsetLeft / dimensions.width * 100 + '%' + (e.pageY - imgPic!.offsetTop / dimensions.height * 100 +'%')}`)
    this.setState({
      
      //transformOrgin: `${e.pageX - imgPic!.offsetLeft / dimensions.width * 100 + '%' + (e.pageY - dimensions.height / imgPic!.clientHeight * 100 +'%')}`
    
    });
    
  }

  

  public render(){
    return(
  <div className='photo'>
  <div>
  <img className='tile' id='haha' onMouseMove={this.handleMouseMove} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src="https://upload.wikimedia.org/wikipedia/commons/1/1c/1_The_Opera_House_in_Sydney.jpg" height='200' width='200'  style={this.state}/>
   </div>
    </div>
);
}
}
