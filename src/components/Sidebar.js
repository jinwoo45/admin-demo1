import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCaretDown,
  faStore,
  faComments,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
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
      icon: <FontAwesomeIcon icon={faUser} />,
      route: "member",
      menuName: "매출/통계",
    },
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      route: "member",
      menuName: "이벤트 관리",
    },
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      route: "point",
      menuName: "포인트 관리",
      subMenu: [
        {
          icon: "-",
          route: "community/free",
          menuName: "토리(충전금) 관리",
        },
        {
          icon: "-",
          route: "community/info",
          menuName: "마일리지 관리",
        },
        {
          icon: "-",
          route: "community/sophomore",
          menuName: "환불 관리",
        },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faStore} />,
      route: "point",
      menuName: "NFT 마켓",
      subMenu: [
        {
          icon: "-",
          route: "community/free",
          menuName: "상품 승인 관리",
        },
        {
          icon: "-",
          route: "community/info",
          menuName: "구매/판매 관리",
        },
        {
          icon: "-",
          route: "community/sophomore",
          menuName: "민팅 아이디 관리",
        },
        {
          icon: "-",
          route: "community/market",
          menuName: "수수료 설정",
        },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faComments} />,
      route: "point",
      menuName: "게시판 관리",
      subMenu: [
        {
          icon: "-",
          route: "community/free",
          menuName: "우리끼리",
        },
        {
          icon: "-",
          route: "community/info",
          menuName: "오늘의 학식",
        },
        {
          icon: "-",
          route: "community/sophomore",
          menuName: "행사안내",
        },
        {
          icon: "-",
          route: "community/market",
          menuName: "공지사항",
        },
        {
          icon: "-",
          route: "community/market",
          menuName: "FAQ",
        },
      ],
    },
  ];

  const [submenu, setSubmenu] = useState(true);

  const showSubmenu = () => {
    setSubmenu((prev) => !prev);
  };
  let navigate = useNavigate();
  return (
    <div>
      <div className={sidebar ? "nav1 nav-off" : "nav1"}>
        <div className="logo-box" onClick={() => navigate("/")}>
          <img src="/torymeta_logo.png" alt="로고" width={200} />
        </div>
        {menulist.map((menu, i) =>
          menu.subMenu ? (
            <>
              <div className="menu" onClick={showSubmenu}>
                <div className="menu-icon">{menu.icon}</div>
                <div className="menu-name">{menu.menuName}</div>
                {submenu ? (
                  <div className="menu-down-icon">
                    <FontAwesomeIcon icon={faCaretUp} />
                  </div>
                ) : (
                  <div className="menu-down-icon">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </div>
                )}
              </div>
              {submenu ? (
                <ul className="submenu">
                  {menu.subMenu.map((item) => (
                    <NavLink to={item.route}>
                      <li>
                        <div className="submenu-icon">{item.icon}</div>
                        <div className="menu-name">{item.menuName}</div>
                      </li>
                    </NavLink>
                  ))}
                </ul>
              ) : null}
            </>
          ) : (
            <NavLink to={menu.route} key={i}>
              <div className="menu">
                <div className="menu-icon">{menu.icon}</div>
                <div className="menu-name">{menu.menuName}</div>
              </div>
            </NavLink>
          )
        )}
      </div>
      <Topbar showSidebar={showSidebar}></Topbar>
      <Outlet />
    </div>
  );
};

export default Sidebar;
