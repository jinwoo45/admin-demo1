import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import 'assets/css/Sidebar.css'

const Sidebar = () => {

    const menulist = [
      {
      route:"member",
      menuName:"회원관리",
      },
      {
      route:"gathering",
      menuName:"게더링",
      }, 
      {
      route:"club",
      menuName:"동아리",
      }, 
      {
      route:"admin",
      menuName:"관리자",
      }, 
      {
      route:"store",
      menuName:"상점등록",
      }, 
      {
      route:"nft",
      menuName:"NFT이벤트",
      }, 
      {
      route:"community",
      menuName:"커뮤니티",
      }]

  return (
    <div>
    <div className='nav1'>
        <div class = "logo-box"><img src = "./togather_logo.png" alt="로고" width = {200}/></div>
        {menulist.map((menu) => <div className='menu'>
            <Link to = {menu.route}><div className='menu-name'>{menu.menuName}</div></Link>
            <div className='menu-icon'>&#9662;</div>
          </div>)}
    </div>
    <Topbar></Topbar>
    <Outlet />
    </div>
  )
}

export default Sidebar
