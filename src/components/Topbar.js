import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "assets/css/Topbar.css";

const Topbar = ({ showSidebar }) => {
    const navigate = useNavigate();
    const logoutUser = (e) => {
        navigate("/login");
    };

    const [profile,setProfile] = useState(false);

    const showProfile = ()=>{
        setProfile((prev) => !prev);
    }

    return (
        <div className="nav2">
            <div className="bars" onClick={showSidebar}>
                <FontAwesomeIcon icon={faBars} className="bar-icon" />
            </div>
            <div className="nav2-right">
                <div onClick ={showProfile} className= "profile">
                    <FontAwesomeIcon icon={faUser} className="nav2-right-icon" />
                    admin님
                   {profile ? <div className="profilebox">
                        <div>슈퍼관리자</div>
                        <button className="member-button">비밀번호 수정</button>
                        <div className="profile-tri"></div>
                   </div> : false}
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
