import style from "./bottom.module.css"
import { data } from "../../../../dashboard_data";
import {BsFillFlagFill} from "react-icons/bs"
import {LiaGlobeAfricaSolid} from "react-icons/lia"
import {BiCategoryAlt} from "react-icons/bi"
import increase_image from "../../../../images/increasing.png"
import { Doughnut } from "react-chartjs-2";
import globe from "../../../../images/globe.png"
import country from "../../../../images/country.png"
import category from "../../../../images/category.png"

const Bottom=()=>{
    const chartData={
        labels:["Conversion Rate"],
        datasets:[{
            label:"Conversion Rate",
            data: [data.conversionRate, 100 - data.conversionRate],
            backgroundColor:["#65A8E5","#B3B3B1"]
            
        }]
    }
    const options={
        responsive:true,
        radius:"80%",
        rotation:225,
        circumference:270,
        plugins:{
            legend:{
                display:true,
                position:"top"
            }
        }
    }
    return (
        <div className={style.bottom}>
            <div className={`${style.rank_card} ${style.card}`}>
                <div className={style.rank}>
                    <div >
                        <img className={style.rank_icon} src={globe} ></img>
                    </div>
                    
                    <div className={style.rank_heading}>Global Rank</div>
                    <div className={style.rank_value}>{data.rank.global}</div>
                </div>
                <div className={style.rank}>
                    <div >
                        <img className={style.rank_icon} src={country} ></img>
                    </div>
                    <div className={style.rank_heading}>Country Rank</div>
                    <div className={style.rank_value}>{data.rank.country}</div>
                </div>
                <div className={`${style.rank} ${style.category_rank}`}>
                    <div >
                        <img className={style.rank_icon} src={category} ></img>
                    </div>
                    <div className={style.rank_heading}>Category Rank</div>
                    <div className={style.rank_value}>{data.rank.category}</div>
                </div>
            </div>
            <div className={`${style.sales_card} ${style.card}`}>
                <div className={style.sales_heading}>Total Sales</div>
                <div className={style.sales_value}>{data.totalSales}</div>
                <div className={style.sales_growth}>+1.2% from last month</div>
                <div className={style.increase_image_container}>
                    <img className={style.increase_image} src={increase_image}/>
                </div>
            </div>
            <div className={`${style.rate_card} ${style.card}`}>
                <div className={style.rate_heading}>Conversion Rate</div>
                <div className={style.doughnut_chart}>
                    <Doughnut data={chartData} options={options}/>
                </div>
            </div>
        </div>
    )
}
export default Bottom;