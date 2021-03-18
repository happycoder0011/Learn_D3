export const Facecircle = ({strokeWidth,centerY}) => (
    <circle  
    r={centerY - strokeWidth/2} 
    fill="yellow" 
    stroke="black" 
    stroke-width={strokeWidth}>
    </circle>
  )