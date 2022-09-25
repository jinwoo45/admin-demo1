import React from "react";
import "./css/MemberSearch.css";
const MemberSearch = () => {
    return (
        <div>
            <div className="search-box">
                <form>
                    <div className="search-box-out">
                        <div className="search-box-in">
                            <label>학교 : </label>
                            <select>
                                <option>중앙대학교</option>
                                <option>건국대학교 글로컬캠퍼스</option>
                                <option>배제대학교</option>
                            </select>
                        </div>

                        <div className="search-box-in">
                            <label>검색어 : </label>

                            <select>
                                <option>회원번호</option>
                                <option>이름</option>
                                <option>닉네임</option>
                                <option>핸드폰번호</option>
                                <option>학과</option>
                            </select>
                            <input></input>
                        </div>

                        {/* <div className='search-box-in'>
          <label>가입일 : </label>
          <input></input> ~ <input></input>
        </div> */}
                    </div>
                    <div className="button-box">
                        <button className="member-button">검색</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MemberSearch;
