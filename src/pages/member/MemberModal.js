import React from 'react'
import "./css/MemberModal.css"

const MemberModal = ({modalToggle}) => {
  return (
    <div className='modal'>
      <div className='modal-box'>
        <h3>- 인증데이터</h3>
        <img src ="https://mblogthumb-phinf.pstatic.net/MjAxODA0MTBfODkg/MDAxNTIzMzU1MjkwNzA1.QFH98SRuHlEr8tp9fyAaisCGdtVBZtNjxEn37atvz_Qg.6b-QJc6_K2AKZjT7dc-_g0Bttmore4CnXaxBLdQZkbwg.PNG.cau_mba/%ED%95%99%EC%83%9D%EC%A6%9D.png?type=w800" alt = "학생증 이미지"></img>
        <button className='modal-button' >인증처리</button>
        <button className='modal-close' onClick = {modalToggle}>X</button>
      </div>
    </div>
  )
}

export default MemberModal
