import React, { FC, useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import IEvent from '../models/IEvent'

const EventDetails:FC = () => {
  
  const { id } = useParams()
  const [url] = useState<string>('http://localhost:8080/event/' + id)

  const [event, setEvent] = useState<IEvent | null>(null)

  const getEvent = useCallback (
    async () => {
      const {data, status}  = await axios.get<IEvent>(url)
      if(status === 200)  {
        setEvent(data)
      }
    }, [url]
  )

  useEffect(()  =>  {
    getEvent()   
  },  [getEvent])

  return (  
    <div className="container">
    <div className="details-header">
        <h2>{event?.title}</h2>
    </div>   
    <div className='details-board'>
      <p className='details-desc'>{event?.description}</p>
    </div>   
  </div>    
  )
}

export default EventDetails