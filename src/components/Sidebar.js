import React, {useState} from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faUser, faUsers, faGolfBall,faCaretDown, faUserGear, faStore, faFileImage, faComments, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import Topbar from "./Topbar";
import "assets/css/Sidebar.css";

const Sidebar = ({ sidebar, showSidebar }) => {
    const menulist = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            route: "member",
            menuName: "회원관리",
        },
        {
            icon: <FontAwesomeIcon icon={faSchool} />,
            route: "university",
            menuName: "학교관리",
        },
        {
            icon: <FontAwesomeIcon icon={faUsers} />,
            route: "gathering",
            menuName: "게더링",
        },
        {
            icon: <FontAwesomeIcon icon={faGolfBall} />,
            route: "club",
            menuName: "동아리",
        },
        {
            icon: <FontAwesomeIcon icon={faUserGear} />,
            route: "admin",
            menuName: "관리자",
        },
        {
            icon: <FontAwesomeIcon icon={faStore} />,
            route: "store",
            menuName: "상점등록",
        },
        {
            icon: <FontAwesomeIcon icon={faFileImage} />,
            route: "nft",
            menuName: "NFT이벤트",
        },
        {
            icon: <FontAwesomeIcon icon={faComments} />,
            route: "community",
            menuName: "커뮤니티",
            subMenu : [
                {
                    route:"community/university",
                    menuName : "학교 게시글"
                },
                {
                    route:"community/freshman",
                    menuName : "새내기 게시글"
                },
                {
                    route:"community/sophomore",
                    menuName : "재학생 게시글"
                },
                {
                    route:"community/declare",
                    menuName : "신고 게시글"
                },
            ]
        },
    ];

    const [submenu,setSubmenu] = useState(true);

    const showSubmenu = ()=>{
        setSubmenu((prev) => !prev);
    }

    return (
        <div>
            <div className={sidebar ? "nav1 nav-off" : "nav1"}>
                <div className="logo-box">
                    <img src="/togather_logo.png" alt="로고" width={200} />
                </div>
                {menulist.map((menu, i) => (menu.subMenu ?<>
                        <div className="menu" onClick = {showSubmenu}>
                            <div className="menu-icon">{menu.icon}</div>
                            <div className="menu-name" >{menu.menuName}</div>
                            { submenu ?
                            <div className="menu-down-icon"><FontAwesomeIcon icon={faCaretUp} /></div>
                            :<div className="menu-down-icon"><FontAwesomeIcon icon={faCaretDown} /></div>
                            }
                        </div>
                        {submenu ? <ul className="submenu">
                            {menu.subMenu.map((item) =>(
                            <NavLink to ={item.route}><li >
                                <div className="submenu-icon">-</div>
                                <div className="menu-name">{item.menuName}</div>
                            </li></NavLink>))
                            }
                            </ul> :null}
                        </>
                    : <NavLink to={menu.route} key={i}>
                        <div className="menu">
                            <div className="menu-icon">{menu.icon}</div>
                            <div className="menu-name">{menu.menuName}</div>
                        </div>
                    </NavLink>
                ))}
            </div>
            <Topbar showSidebar={showSidebar}></Topbar>
            <Outlet />
        </div>
    );
};

export default Sidebar;
