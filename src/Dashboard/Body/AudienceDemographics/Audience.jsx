import GenderDoughnutChart from "./GenderDoughnutChart"
import AgeDistributionBarChart from "./AgeDistributionBarChart"
import style from "./Audience.module.css"
const Audience=()=>{
    return (
        <div>
            <h1 className={style.audience_heading}>Audience Demographics</h1>
            <div className={style.Audience_card}>
                <div className={`${style.gender_card} chart_card_hover`}>
                    <div className={style.card_heading}>Gender Demographics</div>
                    <div className={style.pie_chart}>
                        <GenderDoughnutChart/>
                    </div>
                </div>
                <div className={`${style.age_card} chart_card_hover`}>
                    <div className={style.card_heading}>Age Demographics</div>
                    <AgeDistributionBarChart/>
                </div>
            </div>
        </div>
    )
}
export default Audience;