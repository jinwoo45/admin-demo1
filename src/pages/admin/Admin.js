import React, { useEffect, useState } from 'react'
import './css/Admin.css'
import DetailAdmin from './DetailAdmin'
import Paging from 'components/Paging'
import SearchAdmin from './SearchAdmin'
import CreateAdmin from './CreateAdmin'

const Admin = () => {
  const[adminList,setAdminList] = useState([]);

  const [modal, setModal] = useState(false);

  const [detailAdmin, setDetailAdmin] = useState({});

  const [createModal, setCreateModal] = useState(false);

  const [checkItems, setCheckItems] = useState([]);

  const setModalState = (key) => {
    setModal(prev => !prev);
    setDetailAdmin(adminList[key]);
  };

  const setCreateModalState = () => {
    setCreateModal(prev => !prev);
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
      adminList.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      setCheckItems([]);
    }
  };

  const getAdminList = async () => {
    let url = 'https://my-json-server.typicode.com/jinwoo45/admin-demo1/admin';
    //let url = 'http://localhost:3002/admin';
    let response = await fetch(url);
    let data = await response.json();
    setAdminList(data);
  }
    useEffect(() => {
      getAdminList();
    },[]);
  return (
    <div className="admin-container">
      <SearchAdmin></SearchAdmin>
      <div className="admin-btn">
        <button type="button">선택 항목 삭제</button>
        <button type="button" onClick={setCreateModalState}>등록</button>
      </div>
      <div>
        <table className="admin-table" width ="100%">
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
              <th>
                <input type="checkbox" onChange={(e) => handleAllCheck(e.target.checked)} checked={checkItems.length === adminList.length ? true : false} />
              </th>
              <th>UUID</th>
              <th>관리자ID</th>
              <th>관리자명</th>
              <th>그룹명</th>
              <th>등록인ID</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>   
            {adminList.map((item, index)=><tr className='adminList' key={item.id} onClick={(e) => {setModalState(index, e)}}>
              <td>
                <input type="checkbox" checked={checkItems.includes(item.id) ? true : false} onChange={(e) => handleSingleCheck(e.target.checked, item.id)} onClick={(e) => {e.stopPropagation()}} />
              </td>
              <td>{item.id}</td>
              <td>{item.adminId}</td>
              <td>{item.adminName}</td>
              <td>{item.adminGroup}</td>
              <td>{item.createId}</td>
              <td>{item.createDate}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {modal && <DetailAdmin setModalState={setModalState} detailAdmin={detailAdmin} />}
      {createModal && <CreateAdmin setCreateModalState={setCreateModalState} />}
      <Paging></Paging>
    </div>
  )
}

export default Admin
