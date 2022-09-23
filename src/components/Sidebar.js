import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faUser, faUsers, faGolfBall,faUserGear,faStore,faFileImage, faComments} from '@fortawesome/free-solid-svg-icons'
import Topbar from './Topbar'
import 'assets/css/Sidebar.css'

const Sidebar = () => {

    const menulist = [
      {
      icon : <FontAwesomeIcon icon = {faUser} />,
      route:"member",
      menuName:"회원관리",
      },
      {
      icon : <FontAwesomeIcon icon = {faSchool} />,
      route:"university",
      menuName:"학교관리",
      },
      {
      icon : <FontAwesomeIcon icon = {faUsers} />,
      route:"gathering",
      menuName:"게더링",
      }, 
      {
      icon : <FontAwesomeIcon icon = {faGolfBall} />,  
      route:"club",
      menuName:"동아리",
      }, 
      {
      icon : <FontAwesomeIcon icon = {faUserGear} />,  
      route:"admin",
      menuName:"관리자",
      }, 
      {
      icon : <FontAwesomeIcon icon = {faStore} />,  
      route:"store",
      menuName:"상점등록",
      }, 
      {
      icon : <FontAwesomeIcon icon = {faFileImage} />,  
      route:"nft",
      menuName:"NFT이벤트",
      }, 
      {
      icon : <FontAwesomeIcon icon = {faComments} />,  
      route:"community",
      menuName:"커뮤니티",
      }]

  return (
    <div>
    <div className='nav1'>
        <div class = "logo-box"><img src = "./togather_logo.png" alt="로고" width = {200}/></div>
        {menulist.map((menu) => <Link to = {menu.route}><div className='menu'>
            <div className='menu-icon'>{menu.icon}</div>
            <div className='menu-name'>{menu.menuName}</div>
          </div></Link>)}
    </div>
    <Topbar></Topbar>
    <Outlet />
    </div>
  )
}

export default Sidebar
