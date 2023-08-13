import {Geo} from "react-chartjs-2"
import {data} from "../../dashboard_data"

const GeoChart=()=>{
    const chartData={
        labels:Object.keys(data.geoData),
        datasets:{
            data:Object.values(data.geoData),
            
        }
    }
    const options={
        responsive:true,
        maintainAspectRatio:false,
        scales:{
            x:{
                display:false,
            },
            y:{
                display:false,
            }
        },
        plugins:{
            legend:{
                display:false,
            }
        }
    }
    return (
        <div><Geo data={chartData} options={options}/></div>
    )
}
export default GeoChart;