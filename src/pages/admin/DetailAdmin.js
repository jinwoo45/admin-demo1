import React from 'react'
import './css/DetailAdmin.css'

const DetailAdmin = ({ detailAdmin, setModalState }) => {
    return (
    <div className="modal openModal">
        <section>
            <header>관리자 상세</header>
            <main>
                <div>
                    <ul>
                        <li>
                            <div className="admin-input-name">UUID</div>
                            <input type="text" defaultValue={detailAdmin.id} />
                        </li>
                        <li>
                            <div className="admin-input-name">관리자ID</div>
                            <input type="text" defaultValue={detailAdmin.adminId} />
                        </li>
                        <li>
                            <div className="admin-input-name">관리자명</div>
                            <input type="text" defaultValue={detailAdmin.adminName} />
                        </li>
                        <li>
                            <div className="admin-input-name">그룹명</div>
                            <input type="text" defaultValue={detailAdmin.adminGroup} />
                        </li>
                        <li>
                            <div className="admin-input-name">부서</div>
                            <input type="text" defaultValue={detailAdmin.adminDept} />
                        </li>
                        <li>
                            <div className="admin-input-name">등록인ID</div>
                            <input type="text" defaultValue={detailAdmin.createId} />
                        </li>
                        <li>
                            <div className="admin-input-name">등록일</div>
                            <input type="text" defaultValue={detailAdmin.createDate} />
                        </li>
                        <li>
                            <div className="admin-input-name">이메일</div>
                            <input type="text" defaultValue={detailAdmin.adminEmail} />
                        </li>
                        <li>
                            <div className="admin-input-name">연락처</div>
                            <input type="text" defaultValue={detailAdmin.adminPhone} />
                        </li>
                        <li>
                            <div className="admin-input-name">비고</div>
                            <input type="text" />
                        </li>
                    </ul>
                </div>
            </main>
            <footer>
                <button type="button">수정</button>
                <button type="button" onClick={setModalState} className="detail-admin-cancel">취소</button>
            </footer>
        </section>
    </div>
    )
}

export default DetailAdmin