import React,{useState} from 'react'
import UniversityUpdate from './UniversityUpdate'

const UniversityList = () => {
    
    const [modal, setModal] = useState(false);

    const showModal = () =>{
        setModal((prev) => !prev)
    }
  
    return (
    <div>
      <div className="insert-member">
                <button className="member-button">선택삭제</button>
                <button className="member-button"onClick = {showModal}>학교등록</button>
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
                        <th>대표코드</th>
                        <th>학교</th>
                        <th>메타캠퍼스 사용여부</th>
                        <th>기능</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>kku</td>
                        <td>건국대학교 글로컬캠퍼스</td>
                        <td>Y</td>
                        <td>                    
                            <button className="info-button" onClick = {showModal}>정보 수정</button>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>ku</td>
                        <td>건국대학교</td>
                        <td>N</td>
                        <td>                    
                            <button className="info-button"onClick = {showModal} >정보 수정</button>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>cau</td>
                        <td>중앙대학교</td>
                        <td>N</td>
                        <td>                    
                            <button className="info-button" onClick = {showModal}>정보 수정</button>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox"></input></td>
                        <td>cbu</td>
                        <td>충북대학교</td>
                        <td>Y</td>
                        <td>                    
                            <button className="info-button" onClick = {showModal}>정보 수정</button>
                        </td>
                    </tr>
                </tbody>
        </table>
        { modal ? <UniversityUpdate showModal = {showModal}></UniversityUpdate> : null}
        
    </div>
  )
}

export default UniversityList
