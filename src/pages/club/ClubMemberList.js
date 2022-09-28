import React from 'react'
import './css/club.css'
const ClubMemberList = ({showModal2}) => {
  return (
<div className="modal">
            <div className="modal-update-box">
                <form>

                    <header>동아리 회원명단</header>
                
                    <table className="clubmember-box-in">
                        <thead>
                        <th>
                            Account ID
                        </th>
                        <th>
                            학교
                        </th>
                        <th>
                            회원명
                        </th>
                        <th>
                            기능
                        </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>L003790</td>
                                <td>충북대학교</td>
                                <td>김진우</td>
                                <td><button>삭제</button></td>
                            </tr>
                            <tr>
                                <td>L003790</td>
                                <td>충북대학교</td>
                                <td>오혜랑</td>
                                <td><button>삭제</button></td>
                            </tr>
                            <tr>
                                <td>L003790</td>
                                <td>충북대학교</td>
                                <td>강태현</td>
                                <td><button>삭제</button></td>
                            </tr>
                            <tr>
                                <td>L003790</td>
                                <td>충북대학교</td>
                                <td>유세련</td>
                                <td><button>삭제</button></td>
                            </tr>
                            <tr>
                                <td>L003790</td>
                                <td>충북대학교</td>
                                <td>도학태</td>
                                <td><button>삭제</button></td>
                            </tr>
                        </tbody>

                    </table>
                 
                    <footer>
                    <div className="modal-update-button-box">
                        <button className="member-button">수정</button>
                        <button className="member-button" onClick = {showModal2}>
                            닫기
                        </button>
                    </div>
                    </footer>
                </form>
            </div>
        </div>
  )
}

export default ClubMemberList
