/* eslint-disable react/prop-types */
// src/pages/ParticipationPage.js
// import React from 'react';
import './Styles/participation-page.css'

const ParticipationPage = ({ selectedEvents, onDeselectEvent }) => {
  return (
    <div className="participation-page">
            <div style={{color:"black", display:'flex', width:"100%", justifyContent:"center"}}>
            <h1>Events Your Participating </h1>
          </div>
      {selectedEvents.length === 0 ? (
        <p>No events selected</p>
      ) : (
        selectedEvents.map((event) => (
          <div key={event.id} className="selected-event">
            <h3>{event.event_name}</h3>
            <p>Category: {event.event_category}</p>
            <p>Time: {new Date(event.start_time).toLocaleTimeString()} - {new Date(event.end_time).toLocaleTimeString()}</p>
            <button onClick={() => onDeselectEvent(event.id)}>Deselect</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ParticipationPage;
