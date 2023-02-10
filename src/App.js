import './App.css';
import React from 'react';
import AvtoLoanding from './components/cardOne/AvtoLoanding';
import AvtoLoandingThree from './components/cardThree/AvtoLoandingThree';
import AvtoLoandingFor from './components/cardFor/avtoLoandingFor';
import AvtoLoandingTwo from './components/cardTwo/AvtoLoandingTwo';


function App() {

  return (
    <div className="App">
      {/*{
        state ? <AvtoLoanding/>:<AvtoLoandingTwo/>
      }
      <button onClick={()=>setState(!state)}>{state}</button>*/}


     <AvtoLoanding/>
     <AvtoLoandingTwo/>
     <AvtoLoandingThree/>
     <AvtoLoandingFor/>

    </div>
  );
}

export default App;
