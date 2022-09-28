import React from "react";
import "./css/SearchAdmin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchAdmin = () => {
    return (
        <div className="search-admin-container">
            <select>
                <option value="/">전체</option>
                <option value="adminId">관리자ID</option>
                <option value="adminGroup">그룹명</option>
                <option value="adminDept">부서명</option>
            </select>
            <div className="search-input-wrap">
                <input type="text" />
                <button className="search-admin-btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
};

export default SearchAdmin;
