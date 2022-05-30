import React, { FC, useState } from 'react'
import IEvent from '../models/IEvent'
import axios from 'axios'



const CreateEvent:FC = () => {

    const [url] = useState<string>('http://localhost:8080/add-event')
        
    const [formData, setFormData] = useState<IEvent>({
        title: '',
        description: '',
        timestamp: 0,  
    })       

    const [time, setTime] = useState('')

    const handleChange:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
         
        setFormData(state => {
            return {...state,
            [e.target.name]: e.target.value
        }
        })
    }    

    const validateForm = (formData:IEvent) => {
      
        const cleartitle = document.getElementById("title-error")
        const cleartime = document.getElementById("time-error")
        const cleardescription = document.getElementById("desc-error")
        cleartitle?.classList.remove('visible') 
        cleartime?.classList.remove('visible')
        cleardescription?.classList.remove('visible')  
        
        if(formData.title === "") {
           const title = document.getElementById("title-error")
           title?.classList.add('visible')                     
           return false
        }                
        if(time === "") {
            const time = document.getElementById("time-error")
            time?.classList.add('visible')            
            return false
        }
        if(formData.description === "") {
            const description = document.getElementById("desc-error")
            description?.classList.add('visible')            
            return false
        }
        return true
         
    } 


    const handleSubmit:React.FormEventHandler<HTMLFormElement> = async (e) =>  {
        e.preventDefault()   
        if(!validateForm(formData)) {
            return;
        }

        const event:IEvent = {...formData, timestamp: Date.parse(time)}
        
        const {data, status}    =  await axios.post<IEvent>("http://localhost:8080/event", event)
        
        if(status === 201) {
            window.location.href = 'http://localhost:3000/'
        }      
        
    }
       



  return (
<div className="form-bg">
    <h2 className='form-title'>Add Event</h2>
    <form onSubmit={handleSubmit}>
        
        <div className="input-group">
            <label htmlFor="title">Title: </label>
            <input type="text" className='form-control' name="title" id="title" value={formData.title} onChange={handleChange} />
            <div><p className="error" id='title-error'>Please enter a description for your event</p></div>           
        </div>

        <div className="input-group">
            <label htmlFor="timestamp">Date / time: </label>
            <input type="datetime-local" className='form-control' name="timestamp" id="timestamp" value={time} onChange={(e) => setTime(e.target.value)} />
            <div><p className='error' id='time-error'>Please enter a time and date for your event</p></div>  
        </div>


        <div className="input-group">
            <label htmlFor="desc">Description: </label>
            <textarea className="form-control"name="description" id="desc" cols={30} rows={10} value={formData.description} onChange={handleChange}></textarea>
            <div><p className='error' id='desc-error'>Please enter a description for your event</p></div>  
        </div>
        <div>
            <button className='form-btn'>Add Event</button>
        </div>

    </form>
</div>
          )
}

export default CreateEvent