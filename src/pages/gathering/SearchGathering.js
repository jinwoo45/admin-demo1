import React from 'react'
import './css/SearchGathering.css'

const SearchGathering = () => {
    return (
        <div className="search-gathering-container">
            <div className="search-category-wrap">
                <label>카테고리</label>
                <select>
                    <option>전체</option>
                    <option>동아리</option>
                    <option>교내 프로그램</option>
                    <option>함께해요</option>
                    <option>해주세요</option>
                    <option>언어교환</option>
                </select>
            </div>
            <div>
                <label>검색어</label>
                <select>
                    <option value="/">전체</option>
                    <option>제목</option>
                    <option>내용</option>
                </select>
                <input type="text" />
            </div>
            <div class="search-btn-wrap">
                <button type="button" className="search-gathering-btn">검색</button>
            </div>
        </div>
    )
}

export default SearchGathering
