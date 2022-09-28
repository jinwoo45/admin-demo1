import React from 'react'

const UniversitySearch = () => {
  return (
    
    <div className="search-box">
        <form>
            <div className="search-box-out">
                <div className="search-box-in">
                    <label>대표코드 : </label>
                <input></input>
                </div>
                <div className="search-box-in">
                    <label>학교 : </label>
                <input></input>
                </div>
            </div>
            <div className="button-box">
                <button className="member-button">검색</button>
            </div>
        </form>
    </div>

)}

export default UniversitySearch
