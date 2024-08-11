/* eslint-disable react/prop-types */
// src/pages/DisplayPage.jsx
// import React, { useState, useEffect } from 'react';
import { useState,useEffect } from 'react';
import Card from './Card'
import mockData from '../MockData/mockdata.json'; // Assuming mock data is stored locally
import './Styles/Display.css'

const DisplayPage = ({ onSelectEvent }) => { // Ensure this prop is received
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(mockData); // Load mock data directly
  }, []);

  return (
       <div className="display-page">
            <div style={{ display:'flex', width:"100%", justifyContent:'center', color:"Black"}}>
                 <h1>Events</h1>
            </div>
      {events.map((event) => (
        <Card key={event.id} event={event} onSelect={onSelectEvent} />
      ))}
    </div>
  );
};

export default DisplayPage;
