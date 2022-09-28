import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft,faAnglesRight,faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/Paging.css';


const Paging = () => {
  return (
    <div className='paging-box-out'>
        <ul className='paging-box'>
          <li><FontAwesomeIcon icon = {faAnglesLeft} className = "icon" /></li>
          <li><FontAwesomeIcon icon = {faAngleLeft} className = "icon" /></li>
          <li className='active'>1</li>
          <li>2</li>
          <li>3</li>
          <li><FontAwesomeIcon icon = {faAngleRight} className = "icon" /></li>
          <li><FontAwesomeIcon icon = {faAnglesRight} className = "icon" /></li>
        </ul>
    </div>
  )
}

export default Paging
