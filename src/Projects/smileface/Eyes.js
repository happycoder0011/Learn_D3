export const Eyes = ({eyesetX,eyesetY,eyeRadius}) => (
    <>
    <circle 
          cx={-eyesetX} 
          cy={-eyesetY} 
          r={eyeRadius} 
          fill="black" 
          />
          <circle 
          cx={+eyesetX} 
          cy={-eyesetY} 
          r={eyeRadius} 
          fill="black" 
          />
        
    </>
    )