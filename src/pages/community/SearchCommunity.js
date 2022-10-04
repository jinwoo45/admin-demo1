import React from 'react';
import './css/SearchCommunity.css';

const SearchCommunity = () => {
  return (
    <div className="search-community-container">
        <div className="search-input-wrap">
          <label>검색어</label>
          <select>
              <option value="/">전체</option>
              <option>제목</option>
              <option>내용</option>
              <option></option>
          </select>
          <input type="text" />
        </div>
        <div className="search-btn-wrap">
          <button type="button" className="search-community-btn">검색</button>
        </div>
    </div>
  )
}

export default SearchCommunity
