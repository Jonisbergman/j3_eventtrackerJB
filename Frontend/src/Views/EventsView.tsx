import React, { FC, useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import IEvent from '../models/IEvent'
import '../App.css'
import Eventcard from '../components/Events/EventCard'

const EventsView:FC = () => {


  const [url] = useState<string>('http://localhost:8080/event/')

  const [events, setEvents] = useState<IEvent[]>([])

  const getEvents = useCallback(async ()  => {
      const { data, status } = await axios.get<IEvent[]>(url)

      if(status === 200) {
        setEvents(data)
      }

    }, [url])

  useEffect(()  =>  {
    getEvents()
  }, [getEvents])


  return (
<div className="container">
  <div className="list-header">
      <h2>Upcoming events</h2>
  </div> 

  <div className='event-board'>
    <ul className='item-list'>   
        {!events.length && <h3 className='list-empty'> No planned events :( </h3>}    
         {events.map(evt => (
           <Eventcard evt={evt} key={evt.id}/>
         ))}                   
     </ul> 
  </div>   
</div>    
  )
}

export default EventsView