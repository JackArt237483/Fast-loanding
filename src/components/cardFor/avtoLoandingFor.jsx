import React from 'react'
import Logos4 from "..//cardFor/Icon4.svg"

function AvtoLoandingFor() {
  const [counter , setCounter] = React.useState(0)
  
  React.useEffect(() =>{
    if(counter < 4) {
      setTimeout(()=> {
        setCounter(counter + 1)
      },1000)
    }
  },[counter])
    return (
      <div className="App">

       <div className="cardOne">
        <img src={Logos4} alt="page" />
        <p>{counter}</p>
        <h6>Туров ежемесячно</h6>
       </div>


      </div>
    );
  }
  
  export default AvtoLoandingFor;