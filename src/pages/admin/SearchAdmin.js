import React from "react";
import "./css/SearchAdmin.css";

const SearchAdmin = () => {
    return (
        <div className="search-admin-container">
            <div className="search-group-wrap">
                <label>그룹명</label>
                <select>
                    <option>전체</option>
                    <option>슈퍼관리자</option>
                    <option>티앤메타관리자</option>
                    <option>학교관리자</option>
                </select>
            </div>
            <div>
                <label>검색어</label>
                <select>
                    <option value="/">전체</option>
                    <option value="adminId">관리자ID</option>
                    <option value="adminDept">부서명</option>
                </select>
                <input type="text" />
            </div>
            
            <div className="search-btn-wrap">
                <button type="button" className="search-admin-btn">검색</button>
            </div>
        </div>
    );
};

export default SearchAdmin;
