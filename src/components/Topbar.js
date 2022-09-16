import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import 'assets/css/Topbar.css'

const Topbar = () => {
  return (
  <div className = 'nav2'>
    <div className = 'bars'>
      <FontAwesomeIcon icon = {faBars} className = "bar-icon" />
    </div>
    <div className='nav2-right'>
      <div>admin님</div>
      <div>개인정보 수정</div>
      <div><Link to= "/login">로그아웃</Link></div>
  </div>
</div>
  )
}

export default Topbar
