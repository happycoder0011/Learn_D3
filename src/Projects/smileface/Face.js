export const Face = ({children,height,width,centerX,centerY}) => (
    <svg width={width} height={height}>
       <g transform={`translate(${centerX},${centerY})`}>
         {children}
       </g>  
    </svg>
        
   )
   