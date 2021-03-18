import {Facecircle} from './Facecircle';
import {Eyes} from './Eyes';
import {Expression} from './Expression';
import {Face} from './Face';
import {useState} from 'react'

export  const Smileface =({height,width,centerX,centerY,strokeWidth,eyesetX,eyesetY}) => {
  const [eyeRadius,setEyeRadius] =useState(30);
  
  return (
    <>
    <input type="range" max="100"  min="0" value = {eyeRadius} onChange={(e) => (setEyeRadius(e.target.value))}/>
    <Face height={height} 
    width={width} 
    centerX={centerX} 
    centerY={centerY}
    >
  <Facecircle strokeWidth={strokeWidth} 
           centerY={centerY}/>
  <Eyes eyesetX={eyesetX} 
     eyesetY={eyesetY}
     eyeRadius={eyeRadius}/>
  <Expression/>
  </Face>
  </>
  )
}