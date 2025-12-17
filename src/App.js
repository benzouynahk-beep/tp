import { useState } from "react";

import EventList from "./EventList";

function App() {
  const evenements = [
  {
    id: 1,
    title: "Photographie",
    description: "",
    date: "2025-12-19",
    location: "Tanger",
    type: "Atelier",
    favorite: false
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "Learning machine",
    date: "2025-12-27",
    location: "À distance",
    type: "Conférence",
    favorite: false
  }
];
  const [events, setEvents] = useState(evenements);

  return (
    <div className="app">
      <EventList events={events} setEvents={setEvents} />
    </div>
  );
}

export default App;