import React from 'react'

const ClubSearch = () => {
  return (

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
                            <label>동아리 : </label>
                            <input></input>
                        </div>

                    </div>
            <div className="button-box">
                <button className="member-button">검색</button>
            </div>
        </form>
    </div>


  )
}

export default ClubSearch
