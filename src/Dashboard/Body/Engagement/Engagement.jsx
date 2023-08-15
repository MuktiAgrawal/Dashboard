import SocialMediaHorizontalBar from "./SocialMediaHorizontalBar";
import TotalVisitsBarChart from "./TotalVisitsBarChart";
import Visits from "./Visits";
import style from "./engagement.module.css"
const Engagement=()=>{
    return (
        <div className={style.Engagement}>
            <h1 className={style.engagement_heading}>Engagement</h1>
            <Visits/>
            <div className={style.engagement_charts}>
                <div className={`${style.individual_chart} chart_card_hover`}>
                    <div className={style.engagement_charts_heading}>Visits over last 6 months</div>
                    <TotalVisitsBarChart/>
                </div>
                <div className={`${style.individual_chart} chart_card_hover`}>
                    <div className={style.engagement_charts_heading}>Followers on social media</div>
                    <SocialMediaHorizontalBar/>
                </div>
            </div>
        </div>
    )
}
export default Engagement;
