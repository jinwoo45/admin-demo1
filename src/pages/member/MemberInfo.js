import React, { useState } from "react";
import MemberModal from "./MemberModal";
import MemberUpdate from "./MemberUpdate";

const MemberInfo = ({ item }) => {
    const [modalView, setModalView] = useState(false);
    const [modalUpdateView, setModalUpdateView] = useState(false);

    const modalToggle = () => {
        setModalView((prev) => !prev);
    };

    const modalUpdateToggle = () => {
        setModalUpdateView((prev) => !prev);
    };

    return (
        <tbody>
            <tr className="memberList">
                <td>
                    <input type="checkbox"></input>
                </td>
                <td>{item.id}</td>
                <td>{item.phonenumber}</td>
                <td>{item.nickname}</td>
                <td>{item.part}</td>
                <td>{item.university}</td>
                <td>{item.certification === true ? "Y" : "N"}</td>
                <td>{item.memberstate === true ? "Y" : "N"}</td>
                <td>
                    <button className="info-button" onClick={modalToggle}>
                        인증데이터 보기
                    </button>
                </td>
                <td>
                    <button className="info-button" onClick={modalUpdateToggle}>
                        정보 수정
                    </button>
                </td>
            </tr>
            {modalUpdateView && <MemberUpdate modalUpdateToggle={modalUpdateToggle}></MemberUpdate>}
            {modalView && <MemberModal modalToggle={modalToggle}></MemberModal>}
        </tbody>
    );
};

export default MemberInfo;
