import React from 'react'
import './css/CreateAdmin.css'

const CreateAdmin = ({ setCreateModalState }) => {
    return (
        <div className="modal openModal">
        <section>
            <header>관리자 등록</header>
            <main>
                <div>
                    <ul>
                        <li>
                            <div className="create-admin-input">관리자ID</div>
                            <input type="text" />
                        </li>
                        <li>
                            <div className="create-admin-input">관리자명</div>
                            <input type="text" />
                        </li>
                        <li>
                            <div className="create-admin-input">관리자PW</div>
                            <input type="password" />
                        </li>
                        <li>
                            <div className="create-admin-input">관리자PW 확인</div>
                            <input type="password" />
                        </li>
                        <li>
                            <div className="create-admin-input">그룹명</div>
                            <input type="text" />
                        </li>
                        <li>
                            <div className="create-admin-input">부서</div>
                            <input type="text" />
                        </li>
                        <li>
                            <div className="create-admin-input">이메일</div>
                            <input type="text" />
                        </li>
                        <li>
                            <div className="create-admin-input">연락처</div>
                            <input type="text" />
                        </li>
                        <li>
                            <div className="create-admin-input">비고</div>
                            <input type="text" />
                        </li>
                    </ul>
                </div>
            </main>
            <footer>
                <button type="button">등록</button>
                <button type="button" onClick={setCreateModalState} className="create-admin-cancel">취소</button>
            </footer>
        </section>
    </div>
    )
}

export default CreateAdmin