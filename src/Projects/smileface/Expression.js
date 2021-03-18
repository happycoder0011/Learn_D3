import * as d3 from 'd3';

export const Expression = () => {
    const pi = Math.PI;
    const moutharc = d3.arc()
    .innerRadius(140)
    .outerRadius(150)
    .startAngle(pi/2)
    .endAngle(3*pi/2);
    return (
      <path d={moutharc()}/>
    )
  }