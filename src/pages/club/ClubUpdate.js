import React from 'react'

const ClubUpdate = ({showModal}) => {
  return (
<div className="modal">
            <div className="modal-update-box">
                <form>
                    <header>동아리 정보</header>
                    <ul className="modal-update-box-in">
                        <li>
                            <div className="table-front">학교 : </div>
                            <div>충북대</div>
                        </li>
                        <li>
                            <div className="table-front">동아리 이름 : </div>
                            <input value="킥복싱 동아리"></input>
                        </li>
                        <li>
                            <div className="table-front">위치 표시 : </div>
                            <select>
                                <option>Y</option>
                                <option>N</option>
                            </select>
                        </li>
                        <li>
                            <div className="table-front">동아리 담당자 : </div>
                            <input value="김진우"></input>
                        </li>
                    </ul>

                    <div className="modal-update-button-box">
                        <button className="member-button">수정</button>
                        <button className="member-button" onClick = {showModal}>
                            취소
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ClubUpdate
