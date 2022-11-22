import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import { Outlet, Link, Routes, Route, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Approve from "pages/market/approve/Approve";
import "assets/css/Layout.module.css";

const Layout = (props) => {
  const logoutUser = () => {
    props.auth();
    console.log(props.auth);
  };
  const { collapseSidebar } = useProSidebar();
  const navigate = useNavigate();

  const [profile, setProfile] = useState(false);

  const showProfile = () => {
    setProfile((prev) => !prev);
  };
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar collapsedWidth="0px">
        <div className="logo_box" onClick={() => navigate("/")}>
          <img src="/torymeta_logo.png" alt="로고" width={200} />
        </div>
        <Menu>
          <SubMenu label="회원관리">
            <MenuItem routerLink={<Link to="/member" />}>
              아이디 조회 및 관리
            </MenuItem>
            <MenuItem routerLink={<Link to="/" />}>휴면 해제 관리</MenuItem>
          </SubMenu>
          <SubMenu label="매출통계">
            <MenuItem routerLink={<Link to="/" />}>준비 중</MenuItem>
          </SubMenu>
          <SubMenu label="이벤트관리">
            <MenuItem routerLink={<Link to="/" />}>준비 중</MenuItem>
          </SubMenu>
          <SubMenu label="포인트 관리">
            <MenuItem routerLink={<Link to="/documentation" />}>
              토리(충전금) 관리
            </MenuItem>
            <MenuItem routerLink={<Link to="/documentation" />}>
              마일리지 관리
            </MenuItem>
            <MenuItem routerLink={<Link to="/documentation" />}>
              환불 관리
            </MenuItem>
          </SubMenu>
          <SubMenu label="NFT 마켓 관리">
            <MenuItem routerLink={<Link to="/market/approve" />}>
              상품 승인 관리
            </MenuItem>
            <MenuItem routerLink={<Link to="/documentation" />}>
              구매/판매관리
            </MenuItem>
            <MenuItem routerLink={<Link to="/documentation" />}>
              민팅 아이디 관리
            </MenuItem>
            <MenuItem routerLink={<Link to="/documentation" />}>
              수수료 설정
            </MenuItem>
          </SubMenu>
          <SubMenu label="게시판 관리">
            <MenuItem routerLink={<Link to="/documentation" />}>
              우리끼리
            </MenuItem>
            <MenuItem routerLink={<Link to="/documentation" />}>
              오늘의 학식
            </MenuItem>
            <MenuItem routerLink={<Link to="/documentation" />}>
              행사안내
            </MenuItem>
            <MenuItem routerLink={<Link to="/documentation" />}>
              공지사항
            </MenuItem>
            <MenuItem routerLink={<Link to="/documentation" />}>FAQ</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main>
        <header>
          <button className="bars" onClick={() => collapseSidebar()}>
            <FontAwesomeIcon icon={faBars} className="bar-icon" />
          </button>
          <div className="nav2-right">
            <div onClick={showProfile} className="profile">
              {/* <FontAwesomeIcon icon={faUserCircle} className="nav2-right-icon" /> */}
              admin 님
              {profile ? (
                <div className="profilebox">
                  <div>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className="profile-icon"
                    />
                  </div>
                  <div className="profile-text">
                    <div>admin(슈퍼관리자)</div>

                    <button onClick={logoutUser} className="member-button">
                      <FontAwesomeIcon
                        icon={faLock}
                        className="nav2-right-icon"
                      />
                      로그아웃
                    </button>
                    <div className="profile-tri"></div>
                  </div>
                </div>
              ) : (
                false
              )}
            </div>
            {/* 개인정보 수정 페이지 이동 */}
          </div>
        </header>
        <Routes>
          <Route path="/market/approve" element={<Approve />} />
        </Routes>
      </main>
      <Outlet />
    </div>
  );
};

export default Layout;
