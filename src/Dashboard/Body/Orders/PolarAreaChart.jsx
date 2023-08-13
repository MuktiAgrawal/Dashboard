import {PolarArea} from "react-chartjs-2"
import {data} from "../../../dashboard_data"

const PolarAreaChart=()=>{
    const chartData={
        labels:Object.keys(data.ordersPerformance),
        datasets:[{
            data:Object.values(data.ordersPerformance),
            backgroundColor:["#67F0AE","#87FAEB","#65A8E5","#61DEF5","#596DD2"],
        }]
    }
    const options={
        responsive:true,
        scales:{
            x:{
                display:false,
            },
            y:{
                display:true,
            }
        },
        plugins:{
            legend:{
                display:true,
                position:"top"
            }
        }
    }
    return (
        <div><PolarArea data={chartData} options={options}/></div>
    )
}
export default PolarAreaChart;