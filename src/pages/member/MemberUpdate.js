import React from "react";
import "./css/MemberModal.css";
import "./css/MemberUpdate.css";

const MemberUpdate = ({ modalUpdateToggle }) => {
    return (
        <div className="modal">
            <div className="modal-update-box">
                <form>
                    <h3>-학생정보</h3>
                    <ul className="modal-update-box-in">
                        <li>
                            <div className="table-front">Account ID : </div>
                            <div>A0001</div>
                        </li>
                        <li>
                            <div className="table-front">이름 : </div>
                            <input value="김진우"></input>
                        </li>
                        <li>
                            <div className="table-front">닉네임 : </div>
                            <input value="메뚜기3분요리"></input>
                        </li>
                        <li>
                            <div className="table-front">핸드폰번호 : </div>
                            <input value="010-5032-3572"></input>
                        </li>
                        <li>
                            <div className="table-front">학교 : </div>
                            <input value="00대학교"></input>
                        </li>
                        <li>
                            <div className="table-front">학과 : </div>
                            <input value="컴퓨터공학과"></input>
                        </li>
                        <li>
                            <div className="table-front">학번 : </div>
                            <input value="20154303"></input>
                        </li>
                        <li>
                            <div className="table-front">이메일 : </div>
                            <input value="jinwoo@tnmeta.io"></input>
                        </li>
                        <li>
                            <div className="table-front">인증 여부 : </div>
                            <div>N</div>
                        </li>
                        <li>
                            <div className="table-front">계정 정지 여부 : </div>
                            <div>N</div>
                        </li>
                        <li>
                            <div className="table-front">가입일 : </div>
                            <div>2022-09-07</div>
                        </li>
                    </ul>

                    <div className="modal-update-button-box">
                        <button className="member-button">수정</button>
                        <button className="member-button" onClick={modalUpdateToggle}>
                            닫기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MemberUpdate;
