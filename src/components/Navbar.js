import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Navbar2 from './Navbar2'

const Navbar = () => {

    const menulist = [
      {
      route:"member",
      menuName:"회원관리",
      }, 
      
      {
      route:"community",
      menuName:"커뮤니티관리",
      }, 
      {
      route:"club",
      menuName:"동아리관리",
      }, 
      {
      route:"admin",
      menuName:"관리자관리",
      }, 
      {
      route:"payment",
      menuName:"결제관리",
      }, 
      {
      route:"nft",
      menuName:"NFT",
      }, 
      {
      route:"question",
      menuName:"Q&A",
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
    <Navbar2></Navbar2>
    <Outlet />
    </div>
  )
}

export default Navbar
