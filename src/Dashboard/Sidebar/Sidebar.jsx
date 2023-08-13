import flipkart_logo from "../../images/flipkart_logo.png"
import style from "./sidebar.module.css"
import { SidebarData } from "./SidebarData"
import { useNavigate } from "react-router-dom"

const Sidebar=()=>{
    const navigate=useNavigate();
    return (
        <div className={style.Sidebar}>
            <div>
                <img src={flipkart_logo} className={style.flipkart_heading}/>
            </div>
            <div>
                <ul className={style.SidebarList}>
                    {SidebarData.map((val,key)=>{
                        return (
                        <li 
                            className={style.SidebarRow} 
                            key={key} 
                            id={window.location.pathname==val.link? style.active :{}}
                            onClick={()=>{navigate(val.link)}}
                            >
                            {" "}
                            <div id={style.icon}>{val.icon}</div>{" "}
                            <div id={style.title}>
                                {val.title}
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;