import React from 'react'
import './css/DetailGathering.css'

const DetailGathering = ({ setModalState, detailGathering }) => {
    return (
        <div className="modal openModal">
            <section>
                <header>게더링 상세</header>
                <main>
                    <div className="detail-gathering-wrap">
                        <ul>
                            <li>
                                <div className="detail-gathering-input">UUID</div>
                                <input type="text" defaultValue={detailGathering.id} />
                            </li>
                            <li>
                                <div className="detail-gathering-input">카테고리</div>
                                <select>
                                    <option>{detailGathering.gatherCategory}</option>
                                    <option>교내 프로그램</option>
                                    <option>함께해요</option>
                                    <option>해주세요</option>
                                    <option>언어교환</option>
                                </select>
                            </li>
                            <li>
                                <div className="detail-gathering-input">제목</div>
                                <input type="text" defaultValue={detailGathering.gatherTitle} />
                            </li>
                            <li>
                                <div className="detail-gathering-input">인원</div>
                                <input type="text" defaultValue={detailGathering.gatherPeople} />
                            </li>
                            <li>
                                <div className="detail-gathering-input">날짜</div>
                                <input type="text" defaultValue={detailGathering.gatherStartDate} />
                            </li>
                            <li>
                                <div className="detail-gathering-input">시작시간</div>
                                <input type="textarea" defaultValue={detailGathering.gatherStartTime} />
                            </li>
                            <li>
                                <div className="detail-gathering-input">종료시간</div>
                                <input type="textarea" defaultValue={detailGathering.gatherEndTime} />
                            </li>
                            <li>
                                <div className="detail-gathering-input">장소</div>
                                <input type="text" defaultValue={detailGathering.gatherPlace} />
                            </li>
                            <li>
                                <div className="detail-gathering-input">상태</div>
                                <select>
                                    <option>{detailGathering.gatherStatus}</option>
                                    <option>모집중</option>
                                    <option>마감</option>
                                    <option>모임중</option>
                                    <option>모임종료</option>
                                    <option>모임 취소</option>
                                </select>
                            </li>
                            <li>
                                <div className="detail-gathering-input">지급 포인트</div>
                                <input type="text" defaultValue={detailGathering.gatherPoint}/>
                            </li>
                            <li className="gathering-textarea">
                                <div className="detail-gathering-input">내용</div>
                                <textarea defaultValue={detailGathering.gatherContent}></textarea>
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
