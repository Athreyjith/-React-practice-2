import './App.css';
import React from 'react';
import Newcom from './subcribe/newcom';
// import Classprop from './classprops/classprop';
// import Compund from './classprops/funprop';
function App() {
  const style = {
    fontWeight: "bold",
    color: "red"
  };

  return (
    <div className="App">
     {/* <Classprop name= "learner 1" place="mysore"> <p> hello </p></Classprop>
     <Classprop name="learner 2" place =" banglore" > <button> click</button></Classprop>
     <Compund name ="learner 3" place ="hydrabad"> </Compund> */}
     <h2 style={style}> welcome</h2>
     <Newcom/>
    </div>
  );
}


export default App;
