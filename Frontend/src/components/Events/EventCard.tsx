import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import IEvent from '../../models/IEvent'
import './EventCard.css'
import moment from 'moment'

interface   EvtProps    {
    evt:    IEvent
}

const Eventcard:FC<EvtProps> = ({evt}) => {
  return (
    <Link to={`/event/${evt.id}`}  className='event-item'>
      <li>
        <h3 className='item-header'>{evt.title}</h3>         
        <p className='item-date'><i className="fa-solid fa-clock"></i>&nbsp;&nbsp;{moment(evt.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</p>   
      </li>   
   </Link>
  )
}

export default Eventcard

