import React, { useEffect, useState } from 'react'
import MemberSearch from './MemberSearch';
import Paging from '../../components/Paging';
import './css/Member.css';
import MemberInfo from './MemberInfo';
import MemberUpdate from './MemberUpdate';

const Member = () => {
  const[memberList,setMemberList] = useState([]);
  const[modalUpdateView,setModalUpdateView] =useState(false);
  

  const modalUpdateToggle = ()=>{
    setModalUpdateView(prev => !prev)
  }


  const getMembers=async()=>{
    // let url = 'https://my-json-server.typicode.com/jinwoo45/admin-demo1/members';
    let url = 'http://localhost:3002/members';
    let response = await fetch(url);
    let data = await response.json();
    setMemberList(data);
  }
    useEffect(()=>{
      getMembers()
    },[])
  return (
    <div>
      <MemberSearch></MemberSearch>
      <div className='insert-member'> 
      <button onClick={modalUpdateToggle} >회원등록</button>
      </div>
        <table width ="100%">
        <colgroup>
        <col width = "5%"></col>
        <col width = "10%"></col>
        <col width = "10%"></col>
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
          <th><input type="checkbox"></input></th>
          <th>Account ID</th>
          <th>전화번호</th>
          <th>이름</th>
          <th>이메일</th>
          <th>학교</th>
          <th>인증 여부</th>
          <th>계정 정지 여부</th>
          <th>인증데이터</th>
          <th>기능</th>
        </tr>
        </thead>   
        {memberList.map((item)=> <MemberInfo item = {item}/>)}
      </table>
      {modalUpdateView && <MemberUpdate modalUpdateToggle = {modalUpdateToggle}></MemberUpdate>}
        <Paging></Paging>

    </div>
  )
}

export default Member
