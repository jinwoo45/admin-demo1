import React from 'react'
import ClubSearch from './ClubSearch'
import ClubList from './ClubList'
import Paging from 'components/Paging'

const Club = () => {
  return (
    <div>
      <ClubSearch></ClubSearch>
      <ClubList></ClubList>
      <Paging></Paging>
    </div>
  )
}

export default Club
