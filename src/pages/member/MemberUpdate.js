import React from 'react'
import "../../assets/css/MemberModal.css"
import "../../assets/css/MemberUpdate.css"

const MemberUpdate = ({modalUpdateToggle}) => {
  return (
    <div className='modal'>
        <div className='modal-update-box'>
            <form>
            <h3>-학생정보</h3>
            <ul className='modal-update-box-in'>
                <li>
                    <div className = "table-front">회원번호 : </div>
                    <div>A0001</div>
                </li>
                <li>
                    <div className = "table-front">이름 : </div>
                    <input value='용사보라미'></input>
                </li>
                <li>
                    <div className = "table-front">닉네임 : </div>
                    <input value='용사보라미'></input>
                </li>
                <li>
                    <div className = "table-front">핸드폰번호 : </div>
                    <input value='010-5032-3572'></input>
                </li>
                <li>
                    <div className = "table-front">학교 : </div>
                    <input value='중앙대학교'></input>
                </li>
                <li>
                    <div className = "table-front">인증여부 : </div>
                    <div>Y</div>
                </li>
                <li>
                    <div className = "table-front">가입일 : </div>
                    <div>2022-09-07</div>
                </li>
                <li>
                    <div className = "table-front">이메일 : </div>
                    <input value='jinwoo@tnmeta.io'></input>
                </li>
                <li>
                    <div className = "table-front">학과 : </div>
                    <input value='컴퓨터공학과'></input>
                </li>
            </ul>

            <div className='modal-update-button-box'>
                <button>수정</button> 
                <button onClick = {modalUpdateToggle}>닫기</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default MemberUpdate
