import React,{useState} from 'react'
import ClubMemberList from './ClubMemberList';
import ClubUpdate from './ClubUpdate';

const ClubList = () => {
    const [modal, setModal] = useState(false);

    const showModal = () =>{
        setModal((prev) => !prev)
    }
    const [modal2, setModal2] = useState(false);

    const showModal2 = () =>{
        setModal2((prev) => !prev)
    }
  
    return (
    <div>
      <div className="insert-member">
                <button className="member-button">선택삭제</button>
            </div>
            <table width="100%">
                <colgroup>
                    <col width="5%"></col>
                    <col width="10%"></col>
                    <col width="20%"></col>
                    <col width="10%"></col>
                    <col width="10%"></col>
                </colgroup>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox"></input>
                        </th>
                        <th>학교</th>
                        <th>동아리</th>
                        <th>운영자</th>
                        <th>기능</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>건국대학교 글로컬캠퍼스</td>
                        <td>요리동아리</td>
                        <td>김진우</td>
                        <td>                    
                            <button className="info-button" onClick = {showModal2}>명단</button>
                            <button className="info-button" onClick = {showModal}>정보 수정</button>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>건국대학교</td>
                        <td>미술동아리</td>
                        <td>유세련</td>
                        <td>                    
                            <button className="info-button" onClick = {showModal2}>명단</button>
                            <button className="info-button"onClick = {showModal} >정보 수정</button>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>중앙대학교</td>
                        <td>게임동아리</td>
                        <td>도학태</td>
                        <td>          
                            <button className="info-button" onClick = {showModal2}>명단</button>          
                            <button className="info-button" onClick = {showModal}>정보 수정</button>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>충북대학교</td>
                        <td>킥복싱동아리</td>
                        <td>오혜랑</td>
                        <td> 
                            <button className="info-button" onClick = {showModal2}>명단</button>                   
                            <button className="info-button" onClick = {showModal}>정보 수정</button>
                        </td>
                    </tr>
                </tbody>
        </table>
        { modal ? <ClubUpdate showModal = {showModal}></ClubUpdate> : null}
        { modal2 ? <ClubMemberList showModal2 = {showModal2}></ClubMemberList> : null}
        
    </div>
  )
}


export default ClubList
