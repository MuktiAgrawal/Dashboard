import {BsFillPeopleFill} from "react-icons/bs";
import {AiFillInteraction} from "react-icons/ai"
import {FaHome} from "react-icons/fa"
import {BsFillCartCheckFill} from "react-icons/bs"
import {BiSolidCoinStack} from "react-icons/bi"

export const SidebarData=[
    {
        title:"Overview",
        icon:<FaHome/>,
        link:"/"
    },
    {
        title:"Sales Analytics",
        icon:<BiSolidCoinStack/>,
        link:"/sales"
    },
    
    {
        title:"Audience",
        icon:<BsFillPeopleFill/>,
        link:"/audience"
    },
    {
        title:"Engagement",
        icon:<AiFillInteraction/>,
        link:"/engagement"
    },
    {
        title:"Orders",
        icon:<BsFillCartCheckFill/>,
        link:"/orders"
    },
    
]