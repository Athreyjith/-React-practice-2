
import Classprop from './classprops/classprop';
import Compund from './classprops/funprop';
function App() {
  return (
    <div className="App">
     <Classprop name= "learner 1" place="mysore"> <p> hello </p></Classprop>
     <Classprop name="learner 2" place =" banglore" > <button> click</button></Classprop>

     <Compund name ="learner 3" place ="hydrabad"> </Compund>
 
    </div>
  );
}

export default App;
