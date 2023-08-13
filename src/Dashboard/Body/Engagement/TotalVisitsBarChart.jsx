import {BarChart} from "../DefaultCharts/BarChart.jsx"
import {data} from "../../../dashboard_data.jsx"
// import user from "./dashboard_data.json"
// import React from "react"

const TotalVisitsBarChart=()=>{
    const chartData={
        labels:["January","February","March","April","May","June"],
        datasets:[{
            label:"Total number of visits",
            data:Object.values(data.last6MonthsVisits),
            // backgroundColor:["#83F5BD","#C6FF5E","#E8C461","#FF895E","#F55BE9","#82B9F5"],
            // backgroundColor:["#51899C","#6DC9E8","#E8C461","#53329C","#8456E8","#519C54"]
            // backgroundColor:["#BDBB9B","#858476","#EBCB73","#AFCEED","#489CB8"]
            backgroundColor:["#67F0AE","#87FAEB","#65A8E5","#61DEF5","#596DD2"]
            // borderColor:"black",
            // borderWidth:2
        }]
    }
    const options={
        indexAxis:'x',
        scales:{
            y:{
                beginAtZero:true,
                title:{
                    display:true,
                    text:"Number of visits"
                }
            }
        },
        responsive:true,
        plugins:{
            legend:{
                display:true,
                position:"top",
            }
        }
    }
    return (
        <div className="TotalVisitsBarChart">
            <BarChart data={chartData} options={options}/>
        </div>
    )
}
export default TotalVisitsBarChart;