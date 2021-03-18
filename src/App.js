import './App.css';
import {Smileface} from './Projects/smileface/Smileface';
import React, {useState} from 'react'
import Colorlibrary from './Projects/Colorlibrary/Colorlibrary';
import Mousefollower from './Projects/Mousefollower/Mousefollower';

function App() {
 
  return (
    <div className="App">
      
       {/* <Smileface
      height={500}
      width={700}
      centerX={700/2}
      centerY={500/2}
      strokeWidth={10}
      eyesetX={80}
      eyesetY={100}
     />

      <Mousefollower/>
      
       */}
       <Colorlibrary/>
     
         </div>
  );
}

export default App;
