import style from "./overview.module.css"
import Middle from "./middle/middle";
import Bottom from "./bottom/bottom";

const Overview=()=>{
    return (
        <div className={style.overview}>
            <h1 className={style.dashboard}>Dashboard</h1>
            <Middle/>
            <Bottom/>
        </div>
    )
}
export default Overview;

