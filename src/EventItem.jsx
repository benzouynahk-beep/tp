function EventItem(props) {
  const { event, favoris, deleteEv } = props;

  const eventPasse = new Date(event.date) < new Date();

  return (
    <div
      style={{
        background: eventPasse ? "#111" : "#eee",
        color: eventPasse ? "#fff" : "#000",
      }}
    >
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Date : {event.date}</p>
      
      <button type="button">
        Modifier
      </button>

      <button type="button" onClick={() => favoris(event.id)}>
        Favoris
      </button>

      <button type="button" onClick={() => deleteEv(event.id)}>
        Supprimer
      </button>
    </div>
  );
}

export default EventItem;