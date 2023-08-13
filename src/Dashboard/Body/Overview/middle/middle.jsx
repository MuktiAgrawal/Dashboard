import style from "./middle.module.css"
import {data} from "../../../../dashboard_data"

const Middle=()=>{
    return (
        <div className={style.middle}>
            <p className={style.description}>
                Flipkart is a leading e-commerce platform in India, offering a wide range of products and a seamless shopping experience. With competitive prices and reliable delivery services, it has become a popular choice among online shoppers.
            </p>
            <div className={style.middle_right}>
                <div className={style.heading}>Customer Lifetime Value</div>
                <div className={style.value}>{data.customerLifetimeValue}</div>
            </div>
            <div className={style.middle_right}>
                <div className={style.heading}>Average Order Value</div>
                <div className={style.value}>{data.avgOrderValue}</div>
            </div>
        </div>
    )
}
export default Middle;