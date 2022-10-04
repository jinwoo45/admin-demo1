import React, {useState} from 'react';
import './css/Community.css';
import SearchCommunity from './SearchCommunity';
import DetailCommunity from './DetailCommunity';
import Paging from 'components/Paging';


const Community = () => {
  const [modal, setModal] = useState(false);

  const [checkItems, setCheckItems] = useState([]);

  const setModalState = () => {
    setModal(prev => !prev);
  };

  return (
    <div className="community-container">
      <SearchCommunity></SearchCommunity>
      <div className="community-btn">
        <button type="button">선택 항목 삭제</button>
        <button type="button">회원 제재</button>
      </div>
      <div>
        <table className="community-table" width ="100%">
          <colgroup>
          <col width = "10%"></col>
          <col width = "10%"></col>
          <col width = "30%"></col>
          <col width = "20%"></col>
          <col width = "10%"></col>
          <col width = "20%"></col>
          </colgroup> 
          <thead>    
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>No</th>
              <th>내용</th>
              <th>학교</th>
              <th>등록인</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>   
            <tr onClick={setModalState}>
              <td><input type="checkbox" /></td>
              <td>1</td>
              <td>공지사항</td>
              <td>중앙대학교</td>
              <td>유세련</td>
              <td>2022-09-26</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>2</td>
              <td>이벤트</td>
              <td>중앙대학교</td>
              <td>유세련</td>
              <td>2022-09-26</td>
            </tr>
          </tbody>
        </table>
      </div>
      {modal && <DetailCommunity setModalState={setModalState} />}
      <Paging></Paging>
    </div>
  )
}

export default Community
