import GenderDoughnutChart from "./GenderDoughnutChart"
import AgeDistributionBarChart from "./AgeDistributionBarChart"
import "./Audience.css"
const Audience=()=>{
    return (
        <div>
            <h1 className="audience-heading">Audience Demographics</h1>
            <div className="Audience-card">
                <div className="gender-card">
                    <div className="card-heading">Gender Demographics</div>
                    <div className="pie-chart">
                        <GenderDoughnutChart/>
                    </div>
                </div>
                <div className="age-card">
                    <div className="card-heading">Age Demographics</div>
                    <AgeDistributionBarChart/>
                </div>
            </div>
        </div>
    )
}
export default Audience;