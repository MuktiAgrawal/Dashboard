import {BarChart} from "../DefaultCharts/BarChart.jsx"
import {data} from "../../../dashboard_data.jsx"
// import user from "./dashboard_data.json"
// import React from "react"

const AnnualRevenueBarChart=()=>{
    const chartData={
        labels:Object.keys(data.annualRevenue),
        datasets:[{
            label:"Annual Revenue",
            data:Object.values(data.annualRevenue),
            backgroundColor:["#67F0AE","#87FAEB","#65A8E5","#61DEF5","#596DD2"]
        }]
    }
    const options={
        indexAxis:'y',
        scales:{
            x:{
                beginAtZero:true,
                title:{
                    display:true,
                    text:"Revenue"
                }
            },
            y:{
                title:{
                    display:true,
                    text:"Year"
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
        <div className="AnnualRevenueBarChart">
            <BarChart data={chartData} options={options}/>
        </div>
    )
}
export default AnnualRevenueBarChart;