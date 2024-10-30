import React, { Component } from 'react'; // Import Component from React
import image1 from './image1.png'
import images  from './images.png'

class Newcom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "welcome to the channel",
         button : "subcribe.",
         imageURl : image1
      }
    }

style ={
    fontStyle:"italic",
    color:"blue"
}
subclick =()=>{
    this.setState(
        {
            message:"thank you for clicking",
            button:"subcribed",
           
        }
    )
}


imagechange =()=>{
    this.setState({
        message:"thank you clicking bell ion",
        imageURl : images
    })
}

  render() {
    return (
      <div className="App">
        <h1 style ={this.style}>{this.state.message}</h1>
        <button onClick={this.subclick}>{this.state.button}</button>
        <img 
        style = {{width : "30px", height:"40px"}} 
        src ={this.state.imageURl} 
        onClick ={this.imagechange} alt=""/>
         </div>
        
    )
  }
}

export default Newcom


