import {Routes, Route} from 'react-router-dom'
import React from 'react';
import '././App.css';
import Navbar from './components/Navbar/Navbar'
import EventsView from './Views/EventsView';
import EventDetails from './Views/EventDetails';
import CreateEvent from './Views/CreateEvent';


const App:React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<EventsView/>} />
          <Route path='/event/:id' element={<EventDetails/>} />
          <Route path='/add-event' element={<CreateEvent/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
