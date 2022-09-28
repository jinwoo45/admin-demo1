import React from 'react'
import Paging from 'components/Paging'
import UniversitySearch from './UniversitySearch'
import UniversityList from './UniversityList'


const University = () => {
  return (
    <div>
        <UniversitySearch></UniversitySearch>
        <UniversityList></UniversityList>
        <Paging></Paging>
    </div>
  )
}

export default University
