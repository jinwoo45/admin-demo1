import React from 'react'
import './css/SearchAdmin.css'

const SearchAdmin = () => {
    return (
        <div className="search-admin-container">
            <select>
                <option value="/">전체</option>
                <option value="adminId">관리자ID</option>
                <option value="adminGroup">그룹명</option>
                <option value="adminDept">부서명</option>
            </select>
            <input type="text" />
            {/* <button type="button" className="search-admin-btn">검색</button> */}
        </div>
    )
}

export default SearchAdmin
