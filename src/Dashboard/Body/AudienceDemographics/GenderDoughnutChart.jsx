import {Doughnut} from "react-chartjs-2"
import { data } from "../../../dashboard_data"

const GenderDoughnutChart=()=>{
    const chartData={
        labels:Object.keys(data.audienceDemographics.genderDistribution),
        datasets:[{
            label:"Gender Distribution",
            data:Object.values(data.audienceDemographics.genderDistribution),
            // backgroundColor:["#1C637A","#163361"]
            backgroundColor:["#61DEF5","#596DD2"]
        }]
    }
    const options={
        responsive:true,
        cutoutPercentage:50,
        radius:(window.innerWidth>=320 && window.innerWidth<=480)?"70%":"100%",
        plugins:{
            legend:{
                display:true,
                position:"top"
            }
        }
    }
    return (
        <div>
            <Doughnut data={chartData} options={options}/>
        </div>
    )
}
export default GenderDoughnutChart;