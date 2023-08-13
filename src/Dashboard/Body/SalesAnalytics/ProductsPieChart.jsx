import PieChart from "../DefaultCharts/PieChart"
import {data} from "../../../dashboard_data"
const ProductPieChart=()=>{
    const chartData={
        labels:Object.keys(data.revenueByProducts),
        datasets:[{
            label:"Revenue",
            data:Object.values(data.revenueByProducts),
            backgroundColor:["#67F0AE","#87FAEB","#65A8E5","#61DEF5","#596DD2"],
        }]
    }
    const options={
        responsive:true,
        radius:"100%",
        plugins:{
            legend:{
                display:true,
                position:"right",
            }
        }
    }
    return (
        <div className="ProductPieChart">
            <PieChart data={chartData} options={options}/>
        </div>
    )
}
export default ProductPieChart;