import flipkart_logo from "../../images/flipkart_logo.png"
import style from "./sidebar.module.css"
import { SidebarData } from "./SidebarData"
import { useNavigate } from "react-router-dom"
import {useState} from "react"

const Sidebar=()=>{
    const navigate=useNavigate();
    const [sideBarActive,useSideBarActive]=useState(false);
    const toggleSideBar=()=>{
        useSideBarActive(!sideBarActive)
    }
    return (
        <div className={`${style.Sidebar} ${sideBarActive?style.active:""}`}>
            <div className={style.sidebar_heading}>
                {sideBarActive?
                <a href="https://www.flipkart.com/" target="_blank">
                    <img src={flipkart_logo} className={style.flipkart_heading}/>
                </a>
                :null
                }
                <i className={`bx bx-menu ${style['menu-icon']}`} id="menu" onClick={toggleSideBar}></i>
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
                            {sideBarActive?
                            <div id={style.title}>
                                {val.title}
                            </div>
                            :null
                            }
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;