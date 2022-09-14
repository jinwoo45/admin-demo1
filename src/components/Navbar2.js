import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
  <div className='nav2'>
    <div>
      hamburger
    </div>
    <div>
      <div>admin님</div>
      <div>개인정보 수정</div>
    <div><Link to= "/login">로그아웃</Link></div>
  </div>
</div>
  )
}

export default Navbar2
