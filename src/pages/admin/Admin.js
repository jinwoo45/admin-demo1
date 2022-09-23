import React, { useEffect, useState } from 'react'
import './css/Admin.css'
import DetailAdmin from './DetailAdmin'
import Paging from 'components/Paging'

const Admin = () => {
  const[adminList,setAdminList] = useState([]);

  const[checkedItems, setCheckedItems] = useState(new Set());

  const [bChecked, setChecked] = useState(false);

  const [isAllChecked, setIsAllChecked] = useState(false);

  const [modal, setModal] = useState(false);

  const checkedItemHandler = (id, isChecked) => {
    if(isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      console.log("==== checked item ====");
    } else if(!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      console.log("==== deleted item ====");
    }
  };

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(adminList.id, target.checked);
  };

  const allCheckedHandler = (isChecked) => {
    if(isChecked) {
      setCheckedItems(new Set(adminList.map(({ id }) => id)));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(setCheckedItems);
      setIsAllChecked(false);
    }
  };

  const allCheckHandler = () => setChecked(isAllChecked);

  const setModalState = () => {
    setModal(prev => !prev);
  }

  const getAdminList=async()=>{
    //let url = 'https://my-json-server.typicode.com/jinwoo45/admin-demo1/admin';
    let url = 'http://localhost:3002/admin';
    let response = await fetch(url);
    let data = await response.json();
    setAdminList(data);
  }
    useEffect(()=>{
      getAdminList()
    },[])
  return (
    <div className="admin-container">
      <div className="admin-btn">
        <button type="button">선택 항목 삭제</button>
        <button type="button">등록</button>
      </div>
      <div>
        <table width ="100%">
          <colgroup>
          <col width = "10%"></col>
          <col width = "10%"></col>
          <col width = "10%"></col>
          <col width = "10%"></col>
          <col width = "10%"></col>
          <col width = "10%"></col>
          <col width = "10%"></col>
          </colgroup> 
          <thead>    
            <tr>
              <th><input type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)} /></th>
              <th>UID</th>
              <th>관리자ID</th>
              <th>관리자명</th>
              <th>그룹명</th>
              <th>등록인ID</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>   
            {adminList.map((item)=><tr className='adminList' onClick={setModalState}>
              <td><input type="checkbox" checked={bChecked} /></td>
              <td>{item.uid}</td>
              <td>{item.adminId}</td>
              <td>{item.adminName}</td>
              <td>{item.adminGroup}</td>
              <td>{item.createId}</td>
              <td>{item.createDate}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {modal && <DetailAdmin setModalState={setModalState} />}
      <Paging></Paging>
    </div>
  )
}

export default Admin
