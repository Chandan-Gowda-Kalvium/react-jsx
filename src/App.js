import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  let imagedata = imageData();
  // code here
  return (
    <div className='App'>
      <h1> Kalvium gallery </h1>
      <div className='image'>
        <img src={imagedata[0].img}/>
        <img src={imagedata[1].img}/>
      </div>
      <div className='image'>
        <img src={imagedata[2].img}/>
        <img src={imagedata[3].img}/>
      </div>
      
    </div>
  )

}

export default App;
