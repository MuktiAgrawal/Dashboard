import LineChart from "../DefaultCharts/LineChart";
import {data}from "../.././../dashboard_data"

const AnnualRevenueLineChart=()=>{
    const chartData = {
        labels: Object.keys(data.annualRevenue),
        datasets: [
        {
            label: "Annual Revenue",
            data: Object.values(data.annualRevenue),
            pointRadius:5,
            pointHoverRadius:9,
            pointBackgroundColor:["#61DEF5","#67F0AE","#65A8E5","#87FAEB","#596DD2"],
            borderColor:"gray",
        },
        ],
    };
    const options = {
        responsive: true,
        scales:{
            y:{
                title:{
                    display:true,
                    text:"Revenue"
                }
            },
            x:{
                title:{
                    display:true,
                    text:"Year"
                }
            }
        },
        legend: {
            display: true,
            position: 'top',
            },
        };
    return (
        <div>
            <LineChart data={chartData} options={options}/>
        </div>
    )
}
export default AnnualRevenueLineChart;
