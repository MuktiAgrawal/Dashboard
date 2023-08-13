import style from "./Right.module.css"
import Audience from "./AudienceDemographics/Audience"
import Overview from './Overview/overview'
import Engagement from "./Engagement/Engagement"
import SalesAnalytics from "./SalesAnalytics/SalesAnalytics"
import Orders from "./Orders/orders.jsx"

const Right=()=>{
    return (
        <div className={style.Right}>
            <Overview/>
            <SalesAnalytics/>
            <Audience/>
            <Engagement/>
            <Orders/>
        </div>
    )
}
export default Right;