import PolarAreaChart from "./PolarAreaChart.jsx";
import OrdersPerYearLineChart from "./OrdersPerYearLineChart.jsx"
import {data} from "../../../dashboard_data.jsx"
import style from "./orders.module.css"
import {GiReturnArrow} from "react-icons/gi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {FcShipped} from "react-icons/fc"
import "../../../style.css"

const Orders=()=>{
    return (
        <div className={style.Orders}>
            <h1 className={style.orders_heading}>Orders</h1>
            <div className={style.card_container}>
                <div className={`${style.card} card_hover`}>
                    <div className={style.card_left}><AiOutlineShoppingCart size={44}/></div>
                    <div className={style.card_right}>
                        <div className={style.heading}>Average Orders</div>
                        <div className={style.value}>{data.orderUpdates.avgOrders}</div>
                    </div>
                </div>
                <div className={`${style.card} card_hover`}>
                    <div className={style.card_left}><FcShipped size={44}/></div>
                    <div className={style.card_right}>
                        <div className={style.heading}>Average Shipments</div>
                        <div className={style.value}>{data.orderUpdates.avgShipments}</div>
                    </div>
                </div>
                <div className={`${style.card} card_hover`}>
                    <div className={style.card_left}><GiReturnArrow size={44}/></div>
                    <div className={style.card_right}>
                        <div className={style.heading}>Returns</div>
                        <div className={style.value}>{data.orderUpdates.returns}</div>
                    </div>
                </div>
            </div>
            <div className={style.charts}>
                <div className={`${style.individual_chart_card} ${style.line_card} chart_card_hover`}>
                    <div className={style.orders_chart_heading}>Number of orders in the last five years</div>
                    <OrdersPerYearLineChart/>
                </div>
                <div className={`${style.individual_chart_card} ${style.pie_card} chart_card_hover`}>
                    <div className={style.orders_chart_heading}>Orders Performance</div>
                    <div className={style.polar_chart}><PolarAreaChart/></div>
                </div>
            </div>
        </div>
    )
}
export default Orders;
