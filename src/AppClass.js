import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    let data=this.imageData()
    return (
      <div className='App'>
        <h1> Kalvium gallery </h1>
        <div className='image'>
          <img alt="" src={data[0].img}/>
          <img alt="" src={data[1].img}/>
        </div>
        <div className='image'>
          <img alt="" src={data[2].img}/>
          <img alt="" src={data[3].img}/>
        </div> 
      </div>
    )
  }
}

  

  
