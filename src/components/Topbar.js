import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "assets/css/Topbar.css";

const Topbar = ({ showSidebar }) => {
    const navigate = useNavigate();
    const logoutUser = (e) => {
        navigate("/login");
    };

    return (
        <div className="nav2">
            <div className="bars" onClick={showSidebar}>
                <FontAwesomeIcon icon={faBars} className="bar-icon" />
            </div>
            <div className="nav2-right">
                <div>
                    <FontAwesomeIcon icon={faUser} className="nav2-right-icon" />
                    admin님
                </div>
                {/* 개인정보 수정 페이지 이동 */}
                <div onClick={logoutUser}>
                    <FontAwesomeIcon icon={faLock} className="nav2-right-icon" />
                    로그아웃
                </div>
            </div>
        </div>
    );
};

export default Topbar;
