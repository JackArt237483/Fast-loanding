import React from 'react'
import Logos2 from "..//cardTwo/ICON2.svg"

function AvtoLoandingTwo() {
  const [counter , setCounter] = React.useState(0)
  
  React.useEffect(() =>{
    if(counter < 1560) {
      setTimeout(()=> {
        setCounter(counter + 1)
      },5)
    }
  },[counter])
    return (
      <div className="App">

       <div className="cardOne">
        <img src={Logos2} alt="page" />
        <p>{counter}</p>
        <h6>Счастливых клиентов</h6>
       </div>

      </div>
    );
  }
  
  export default AvtoLoandingTwo;