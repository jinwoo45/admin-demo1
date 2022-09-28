import React, { useState } from 'react'
import './css/Gathering.css'
import SearchGathering from './SearchGathering'
import DetailGathering from './DetailGathering'
import Paging from 'components/Paging'


const Gathering = () => {
  
  const [modal, setModal] = useState(false);

  const setModalState = () => {
    setModal(prev => !prev);
  };

  return (
    <div className="gathering-container">
      <SearchGathering></SearchGathering>
      <div className="gathering-btn">
        <button type="button">선택 항목 삭제</button>
      </div>
      <div>
        <table className="gathering-table" width ="100%">
          <colgroup>
          <col width = "10%"></col>
          <col width = "10%"></col>
          <col width = "40%"></col>
          <col width = "20%"></col>
          <col width = "20%"></col>
          </colgroup> 
          <thead>    
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>No</th>
              <th>제목</th>
              <th>카테고리</th>
              <th>상태</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>   
            <tr onClick={setModalState}>
              <td><input type="checkbox" /></td>
              <td>1</td>
              <td>떡볶이 같이 먹어요!</td>
              <td>함께해요</td>
              <td>모집중</td>
              <td>2022-09-26</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>2</td>
              <td>도서관 자리 맡아주실 분 구합니다.</td>
              <td>해주세요</td>
              <td>마감</td>
              <td>2022-09-26</td>
            </tr>
          </tbody>
        </table>
      </div>
      {modal && <DetailGathering setModalState={setModalState} />}
      <Paging></Paging>
    </div>
  )
}

export default Gathering
