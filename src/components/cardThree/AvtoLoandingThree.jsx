import React from 'react'
import Logos3 from "..//cardThree/Group (1).svg"

function AvtoLoandingThree() {
  const [counter,setCounter] = React.useState(0)
  const [count, setCount] = React.useState(0)
  
  React.useEffect(() =>{
    if(counter < 20) {
      setTimeout(()=> {
        setCounter(counter + 1)
      },100)
    }
  },[counter])
  React.useEffect(() =>{
    if(count < 30) {
      setTimeout(()=> {
        setCount(count + 1)
      },100)
    }
  },[count])
    return (
      <div className="App">

       <div className="cardOne">
        <img src={Logos3} alt="page" />
        <p>{counter}-{count}</p>
        <h6>Туров ежемесячно</h6>
       </div>

      </div>
    );
  }
  
  export default AvtoLoandingThree;