import {BarChart} from "../DefaultCharts/BarChart.jsx"
import {data} from "../../../dashboard_data.jsx"
// import user from "./dashboard_data.json"
// import React from "react"

const SocialMediaHorizontalBar=()=>{
    const chartData={
        labels:Object.keys(data.engagement.socialMediaFollowers),
        datasets:[{
            label:"Social media followers",
            data:Object.values(data.last6MonthsVisits),
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
                    text:"Followers"
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
        <div className="SocialMediaHorizontalBar">
            <BarChart data={chartData} options={options}/>
        </div>
    )
}
export default SocialMediaHorizontalBar;