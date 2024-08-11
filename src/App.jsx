// App.js
import { useState } from 'react';
import DisplayPage from './Component/DisplayPage';
import ParticipationPage from './Component/ParticipationPage';

const App = () => {
  const [selectedEvents, setSelectedEvents] = useState(() => {
    const saved = localStorage.getItem('selectedEvents');
    return saved ? JSON.parse(saved) : [];
  });

  const handleSelectEvent = (event) => {
    if (selectedEvents.length >= 3) {
      alert('You can select a maximum of 3 events.');
      return;
    }

    const isConflict = selectedEvents.some(
      (e) =>
        new Date(event.start_time) < new Date(e.end_time) &&
        new Date(event.end_time) > new Date(e.start_time)
    );

    if (isConflict) {
      alert('This event conflicts with one of your selected events.');
      return;
    }

    const updatedSelectedEvents = [...selectedEvents, event];
    setSelectedEvents(updatedSelectedEvents);
    localStorage.setItem('selectedEvents', JSON.stringify(updatedSelectedEvents));
  };
     const handleDeselectEvent = (eventId) => {
          console.log('Deselecting event with id:', eventId);
     const updatedSelectedEvents = selectedEvents.filter(event => event.id !== eventId);
     setSelectedEvents(updatedSelectedEvents);
     localStorage.setItem('selectedEvents', JSON.stringify(updatedSelectedEvents));
   };

  return (
    <div className="app">
      <DisplayPage onSelectEvent={handleSelectEvent} /> {/* Ensure this prop is passed correctly */}
      <ParticipationPage 
        selectedEvents={selectedEvents} 
        onDeselectEvent={handleDeselectEvent} // Pass the handler
      />
    </div>
  );
};

export default App;
