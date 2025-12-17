import { useState } from "react";  
import Header from "./Header";  
import EventItem from "./EventItem";  
import AddEvent from "./AddEvent";  
import SearchEvent from "./SearchEvent";

function EventList({ events, setEvents }) {  
  const [showAdd, setShowAdd] = useState(false);  
  const [filterType, setFilterType] = useState("");  
  const [favorites, setFavorites] = useState([]);  

  function deleteEvent(id) {  
    setEvents(events.filter(e => e.id !== id));  
  }  

  function favorisEv(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  const addEvent = (e) => {
    setEvents([...events, e ]);
  };

  function TriageDate() {  
    setEvents([...events].sort((a, b) => new Date(a.date) - new Date(b.date)));  
  }  

  const filteredEvents = filterType ? events.filter(e => e.type === filterType) : events;  

  return (  
    <div>  
      <Header  
        totalEv={events.length}  
        nbrfavoris={favorites.length}  
      />  

      <SearchEvent TriageType={setFilterType} TriageDate={TriageDate} />  

      <button onClick={() => setShowAdd(true)}>Ajouter un evenement</button>  

      {showAdd && <AddEvent Add={addEvent} Cacher={() => setShowAdd(false)} />}  

      {filteredEvents.map(event => (  
        <EventItem  
          key={event.id}  
          event={event}  
          deleteEv={deleteEvent}  
          favoris={favorisEv}  
        />  
      ))}  
    </div>  
  );  
}  

export default EventList;