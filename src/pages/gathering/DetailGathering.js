import React from 'react'
import './css/DetailGathering.css'

const DetailGathering = ({ setModalState }) => {
    return (
        <div className="modal openModal">
            <section>
                <header>게더링 상세</header>
                <main>
                    <div>
                        <ul>
                            <li>
                                <div className="detail-gathering-input">No</div>
                                <input type="text" defaultValue="1" />
                            </li>
                            <li>
                                <div className="detail-gathering-input">카테고리</div>
                                <input type="text" defaultValue="함께해요" />
                            </li>
                            <li>
                                <div className="detail-gathering-input">제목</div>
                                <input type="text" defaultValue="떡볶이 같이 먹어요!" />
                            </li>
                            <li>
                                <div className="detail-gathering-input">인원</div>
                                <input type="text" defaultValue="1/5" />
                            </li>
                            <li>
                                <div className="detail-gathering-input">날짜</div>
                                <input type="text" defaultValue="2022-09-26" />
                            </li>
                            <li>
                                <div className="detail-gathering-input">시작시간</div>
                                <input type="textarea" defaultValue="13:00" />
                            </li>
                            <li>
                                <div className="detail-gathering-input">종료시간</div>
                                <input type="textarea" defaultValue="15:00" />
                            </li>
                            <li>
                                <div className="detail-gathering-input">장소</div>
                                <input type="text" defaultValue="죠스떡볶이" />
                            </li>
                            <li>
                                <div className="detail-gathering-input">상태</div>
                                <input type="text" defaultValue="모집중"/>
                            </li>
                            <li>
                                <div className="detail-gathering-input">권한</div>
                                <input type="text" defaultValue="사용자"/>
                            </li>
                            <li class="gathering-textarea">
                                <div className="detail-gathering-input">내용</div>
                                <textarea defaultValue="떡볶이"></textarea>
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

export default DetailGathering
