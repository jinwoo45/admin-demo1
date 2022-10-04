import React, { useEffect, useState } from 'react'
import './css/Gathering.css'
import SearchGathering from './SearchGathering'
import DetailGathering from './DetailGathering'
import Paging from 'components/Paging'


const Gathering = () => {

  const [gatherList, setGatherList] = useState([]);
  
  const [modal, setModal] = useState(false);
  
  const [detailGathering, setDetailGathering] = useState({});

  const [checkItems, setCheckItems] = useState([]);

  const setModalState = (key) => {
    setModal(prev => !prev);
    setDetailGathering(gatherList[key]);
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if(checked) {
      const idArray = [];
      gatherList.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      setCheckItems([]);
    }
  };

  const getAdminList = async () => {
    //let url = 'https://my-json-server.typicode.com/jinwoo45/admin-demo1/admin';
    let url = 'http://localhost:3002/gathering';
    let response = await fetch(url);
    let data = await response.json();
    setGatherList(data);
  }
  useEffect(() => {
    getAdminList();
  },[]);

  return (
    <div className="gathering-container">
      <SearchGathering></SearchGathering>
      <div className="gathering-btn">
        <button type="button">선택 항목 삭제</button>
      </div>
      <div>
        <table className="gathering-table" width ="100%">
          <colgroup>
          <col width = "5%"></col>
          <col width = "5%"></col>
          <col width = "30%"></col>
          <col width = "10%"></col>
          <col width = "10%"></col>
          <col width = "20%"></col>
          <col width = "20%"></col>
          </colgroup> 
          <thead>    
            <tr>
              <th>
                <input type="checkbox" onChange={(e) => handleAllCheck(e.target.checked)} checked={checkItems.length === gatherList.length ? true : false} />
              </th>
              <th>No</th>
              <th>제목</th>
              <th>카테고리</th>
              <th>상태</th>
              <th>시작일</th>
              <th>종료일</th>
            </tr>
          </thead>
          <tbody>   
          {gatherList.map((item, index)=><tr className='gatherList' key={item.id} onClick={(e) => {setModalState(index, e)}}>
              <td>
                <input type="checkbox" checked={checkItems.includes(item.id) ? true : false} onChange={(e) => handleSingleCheck(e.target.checked, item.id)} onClick={(e) => {e.stopPropagation()}} />
              </td>
              <td>{item.id}</td>
              <td>{item.gatherTitle}</td>
              <td>{item.gatherCategory}</td>
              <td>{item.gatherStatus}</td>
              <td>{item.gatherStartDate} {item.gatherStartTime}</td>
              <td>{item.gatherEndDate} {item.gatherEndTime}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {modal && <DetailGathering setModalState={setModalState} detailGathering={detailGathering} />}
      <Paging></Paging>
    </div>
  )
}

export default Gathering
