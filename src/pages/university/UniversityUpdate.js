import React from 'react'

const UniversityUpdate = ({showModal}) => {
  return (
<div className="modal">
            <div className="modal-update-box">
                <form>
                    <header>학교정보</header>
                    <main>
                    <ul className="modal-update-box-in">
                        <li>
                            <div className="table-front">대표코드 : </div>
                            <div>cbu</div>
                        </li>
                        <li>
                            <div className="table-front">학교 : </div>
                            <input value="충북대"></input>
                        </li>
                        <li>
                            <div className="table-front">메타캠퍼스 사용 : </div>
                            <select>
                                <option>Y</option>
                                <option>N</option>
                            </select>
                        </li>
                        <li>
                            <div className="table-front">학교 담당자 번호 : </div>
                            <input value="010-5032-3572"></input>
                        </li>
                    </ul>
                    </main>
                    <footer>
                    <div className="modal-update-button-box">
                        <button className="member-button">수정</button>
                        <button className="member-button" onClick = {showModal}>
                            취소
                        </button>
                    </div>
                    </footer>
                </form>
            </div>
        </div>
  )
}

export default UniversityUpdate
