
import AnnualRevenueBarChart from "./AnnualRevenueBarChart";
import AnnualRevenueLineChart from "./AnnualRevenueLineChart";
import ProductsBarChart from "./ProductsBarChart";
import ProductPieChart from "./ProductsPieChart";
import style from "./sales.module.css"
const SalesAnalytics=()=>{
    return (
        <div className={style.SalesAnalytics}>
            <h1 className={style.sales_analytics_heading}>Sales Analytics</h1>
            <div className={style.sales_cards}>
                <div className={style.card}>
                    <div className={style.card_heading}>Annual Revenue</div>
                    <div className={style.charts}>
                        <div className={style.chart_container}><AnnualRevenueLineChart/></div>
                        <div className={style.chart_container}><AnnualRevenueBarChart/></div>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card_heading}>Revenue by products</div>
                    <div className={style.charts}>
                        <div className={`${style.chart_container} ${style.pieChartContainer}`}><ProductPieChart/></div>
                        <div className={`${style.chart_container} ${style.barChartContainer}`}><ProductsBarChart/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SalesAnalytics;
