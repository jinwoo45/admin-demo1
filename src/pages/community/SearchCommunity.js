import React from 'react';
import './css/SearchCommunity.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchCommunity = () => {
  return (
    <div className="search-community-container">
        <select>
            <option value="/">전체</option>
            <option>제목</option>
            <option>내용</option>
            <option></option>
        </select>
        <div className="search-input-wrap">
          <input type="text" />
          <button className="search-community-btn">
              <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
    </div>
  )
}

export default SearchCommunity