import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle, faLock } from "@fortawesome/free-solid-svg-icons";
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
                    <FontAwesomeIcon icon={faUserCircle} className="nav2-right-icon" />
                    admin님
                   {profile ? 
                   <div className="profilebox">
                        <div>
                            <FontAwesomeIcon icon={faUserCircle} className = "profile-icon" />
                        </div>
                        <div className="profile-text">
                            <div>admin(슈퍼관리자)</div>
                            <button className="member-button">프로필 수정</button>
                            <button onClick={logoutUser} className="member-button"><FontAwesomeIcon icon={faLock} className="nav2-right-icon" />
                             로그아웃</button>
                            <div className="profile-tri"></div>
                        </div>
                   </div> : false}
                </div>
                {/* 개인정보 수정 페이지 이동 */}
            </div>
        </div>
    );
};

export default Topbar;
