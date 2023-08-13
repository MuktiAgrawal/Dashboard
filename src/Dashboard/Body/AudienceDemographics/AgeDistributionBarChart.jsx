import {BarChart} from "../DefaultCharts/BarChart.jsx"
import {data} from "../../../dashboard_data.jsx"
// import user from "./dashboard_data.json"
// import React from "react"


const AgeDistributionBarChart=()=>{
    const chartData={
        labels:Object.keys(data.audienceDemographics.ageDistribution),
        datasets:[{
            label:"Percentage",
            data:Object.values(data.audienceDemographics.ageDistribution),
            backgroundColor:["#67F0AE","#87FAEB","#65A8E5","#61DEF5","#596DD2"],
        }]
    }
    const options={
        scales:{
            y:{
                beginAtZero:true,
                title:{
                    display:true,
                    text:"Age Distribution"
                },
                grid:{
                    display:true,
                }
            },
            x:{
                grid:{
                    display:true,
                },
                title:{
                    display:true,
                    text:"Age group"
                }
            }
        },
        responsive:true,
        plugins:{
            legend:{
                display:true,
                position:"top",
            },
            title:{
                display:false,
                text:"Age Distribution"
            }
        }
    }
    return (
        <div className="AgeDistributionBarChart">
            <BarChart data={chartData} options={options}/>
        </div>
    )
}
export default AgeDistributionBarChart;