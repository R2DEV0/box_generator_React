import React, {useState} from 'react';
import './App.css';
import GenerateBoxForm from './components/box';
import DisplayBox from './components/boxDisplay';


function App() {
  const [currentDisplay, setCurrentDisplay] = useState([]);

  // const newBox = ( newDisplay ) => {
  //   setCurrentDisplay( newDisplay );
  // }

  return (
    <div className="App">
      <GenerateBoxForm setCurrentDisplay={ setCurrentDisplay } currentDisplay={ currentDisplay }/>
      <DisplayBox display={currentDisplay} />
    </div>
  );
}

export default App;
