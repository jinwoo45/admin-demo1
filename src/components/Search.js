import React from "react";

const Search = () => {
    return (
        <div>
            <div>
                <div className="search-box">
                    <form>
                        <div className="search-box-out">
                            <div className="search-box-in"></div>

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
        </div>
    );
};

export default Search;
