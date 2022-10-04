import React from 'react';
import './css/DetailCommunity.css';

const DetailCommunity = ({ setModalState }) => {
    return (
        <div className="modal openModal">
            <section>
                <header>학교게시글 상세</header>
                <main>
                    <div>
                        <ul>
                            <li>
                                <div className="detail-gathering-input">No</div>
                                <input type="text" defaultValue="1" />
                            </li>
                            <li>
                                <div className="detail-gathering-input">등록인</div>
                                <input type="text" defaultValue="유세련" />
                            </li>
                            <li>
                                <div className="detail-gathering-input">등록일</div>
                                <input type="text" defaultValue="2022-09-26"/>
                            </li>
                            <li className="gathering-textarea">
                                <div className="detail-gathering-input">내용</div>
                                <textarea defaultValue=""></textarea>
                            </li>
                        </ul>
                    </div>
                </main>
                <footer>
                    <button type="button">수정</button>
                    <button type="button" onClick={setModalState} className="detail-gathering-cancel">취소</button>
                </footer>
            </section>
        </div>
    )
}

export default DetailCommunity
