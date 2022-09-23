import React from 'react'
import Paging from 'components/Paging'
import Search from 'components/Search'
import Table from 'components/Table'

const University = () => {
  return (
    <div>
        <Search></Search>
        <Table></Table>
        <Paging></Paging>
    </div>
  )
}

export default University
