/* eslint-disable react/prop-types */
// import React from 'react'

export default function Card({ event, onSelect }) {
     const handleClick = () => {
          console.log('Select button clicked:', event);
          onSelect(event);
        }
     return (
          
          /* This Display the Card */
     <div className="event-card">
      <h3>{event.event_name}</h3>
      <p>Category: {event.event_category}</p>
      <p>
        Time: {new Date(event.start_time).toLocaleTimeString()} - {new Date(event.end_time).toLocaleTimeString()}
      </p>
      <button onClick={handleClick}>Select</button>
    </div>
  )
}
