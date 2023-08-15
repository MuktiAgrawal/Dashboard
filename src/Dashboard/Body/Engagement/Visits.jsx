import style from "./visits.module.css"
import {data} from "../../../dashboard_data.jsx"
import increase from "../../../images/increase.png"
import decrease from "../../../images/decrease.png"

const Visits=()=>{
    return (
        <div className={style.Visits}>
            <div className={`${style.card} card_hover`}>
                <div className={style.card_heading}>
                    <p className={style.card_topic}>
                        Total Visits
                    </p>
                    <div className={style.info} data-tooltip="Overall number of visits on the Flipkart website"></div>
                    {/* <button className={style.info_button}>
                        <img src={info_icon} className={style.info_icon}/>
                        <div className={style.tooltip}>Overall number of visits on the Flipkart website</div>
                    </button> */}
                </div>
                <div className={style.card_subcontainer}>       
                    <div className={style.card_value}>
                        {data.visits.total}
                    </div>
                    <div className={style.growth}>
                        <div className={style.growth_value}>
                            {data.visitsGrowth.total>0?"+":"-"}
                            {Math.abs(data.visitsGrowth.total)}%
                        </div>
                        <div>
                            {data.visitsGrowth.total > 0 ? (
                                <img src={increase} alt="Increase" className={style.growth_icon} />
                            ) : (
                                <img src={decrease} alt="Decrease" className={style.growth_icon} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.card} card_hover`}>
                <div className={style.card_heading}>
                    <p className={style.card_topic}>
                        Bounce Rate
                    </p>
                    <div className={style.info} data-tooltip="Average percentage of visitors who leave the website after viewing only one page without taking any further action."></div>
                    {/* <button className={style.info_button}>
                        <img src={info_icon} className={style.info_icon}/>
                        <div className={style.tooltip}>Average percentage of visitors who leave the website after viewing only one page without taking any further action.</div>
                    </button> */}
                </div>
                <div className={style.card_subcontainer}>       
                    <div className={style.card_value}>
                        {data.visits.bounceRate}%
                    </div>
                    <div className={style.growth}>
                        <div className={style.growth_value}>
                            {data.visitsGrowth.bounceRate>0?"+":"-"}
                            {Math.abs(data.visitsGrowth.bounceRate)}%
                        </div>
                        <div>
                            {data.visitsGrowth.bounceRate > 0 ? (
                                <img src={increase} alt="Increase" className={style.growth_icon} />
                            ) : (
                                <img src={decrease} alt="Decrease" className={style.growth_icon} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.card} card_hover`}>
                <div className={style.card_heading}>
                    <p className={style.card_topic}>
                        Pages per visit
                    </p>
                    <div className={style.info} data-tooltip="Average number of pages that a user views during a single session on the Flipkart website."></div>
                    {/* <button className={style.info_button}>
                        <img src={info_icon} className={style.info_icon}/>
                        <div className={style.tooltip}>Average number of pages that a user views during a single session on the Flipkart website. </div>
                    </button> */}
                </div>
                <div className={style.card_subcontainer}>       
                    <div className={style.card_value}>
                        {data.visits.pagesPerVisit}
                    </div>
                    <div className={style.growth}>
                        <div className={style.growth_value}>
                            {data.visitsGrowth.pagesPerVisit>0?"+":"-"}
                            {Math.abs(data.visitsGrowth.pagesPerVisit)}%
                        </div>
                        <div>
                            {data.visitsGrowth.pagesPerVisit > 0 ? (
                                <img src={increase} alt="Increase" className={style.growth_icon} />
                            ) : (
                                <img src={decrease} alt="Decrease" className={style.growth_icon} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.card} card_hover`}>
                <div className={style.card_heading}>
                    <p className={style.card_topic}>
                        Avg Duration
                    </p>
                    <div className={style.info} data-tooltip="Average amount of time users spend on the Flipkart website during their sessions."></div>
                    {/* <button className={style.info_button}>
                        <img src={info_icon} className={style.info_icon}/>
                        <div className={style.tooltip}>Average amount of time users spend on the Flipkart website during their sessions. </div>
                    </button> */}
                </div>
                <div className={style.card_subcontainer}>       
                    <div className={style.card_value}>
                        {data.visits.avgDuration}
                    </div>
                    <div className={style.growth}>
                        <div className={style.growth_value}>
                            {data.visitsGrowth.avgDuration>0?"+":"-"}
                            {Math.abs(data.visitsGrowth.avgDuration)}%
                        </div>
                        <div>
                            {data.visitsGrowth.avgDuration > 0 ? (
                                <img src={increase} alt="Increase" className={style.growth_icon} />
                            ) : (
                                <img src={decrease} alt="Decrease" className={style.growth_icon} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Visits