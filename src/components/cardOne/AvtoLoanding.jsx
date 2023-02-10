
import Logos from "..//cardOne/Icon.svg"
import React from 'react';

function AvtoLoanding() {
  const [counter , setCounter] = React.useState(0)
  
  React.useEffect(() =>{
    if(counter < 20) {
      setTimeout(()=> {
        setCounter(counter + 1)
      },1000)
    }
  },[counter])
    return (
      <div className="App">

        <div className="cardOne">
        <img src={Logos} alt="page" />
        <p>{counter}</p>
        <h6>Специалистов</h6>
       </div>

      </div>
    );
  }
  
  export default AvtoLoanding;