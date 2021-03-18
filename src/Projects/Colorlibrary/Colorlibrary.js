import React,{useState, useEffect} from 'react'
import * as d3 from 'd3';
import './Colorlibrary.css';
import { pie } from 'd3';

function Colorlibrary() {
    const url="https://gist.githubusercontent.com/tpham20908/8b2f0efde8d20de9055fef55190b75e4/raw/cssNamedColors";
    const [data,setData] = useState(null);
    useEffect(() => {d3.csv(url,data => {
        setData(data);
        console.log(data)
    })},[]);
    const height= 900;
    const width = 1600;
    const piearc = d3.arc()
                .innerRadius(0)
                .outerRadius(width)


     if(!data)
     {
         return (
             <pre>Loading...</pre>
         )
     }           
                 
    
    return (
        <div>
           
            <svg width={width} height={height}>
            <g transform = "translate(400,400)">
           {
               d3.pie()
               .value(1)(data).map(d => (
                   <path
                   fill ={d.data['RGB hex value']}
                   d = {piearc(d)}/>
               ))
           }




            {/* {data.map((d,i) => 
            <path d={piearc(
                {
                    startAngle: (i/data.length)*2*Math.PI,
                    endAngle: ((i+1)/data.length)*2*Math.PI
                }
            )} fill={d['RGB hex value']}></path>)} */}
            </g>
            </svg>
           
        </div>
    )
}

export default Colorlibrary
