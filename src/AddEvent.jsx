import { useState } from "react";

function AddEvent(props) {
    const { Add, Cacher }=props
  const [title, setTitle] = useState( "");
  const [date, setDate] = useState( "");
  const [location, setLocation] = useState( "");
  const [description, setDescription] = useState("");
  const [type, setType] = useState( "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !location || !description || !type) {
      return alert("Veuillez remplir tous les champs");
    }

    const newEv = {
      id : Date.now(),
      title,
      description,
      date,
      location,
      type
    };

    Add(newEv);  
    setTitle("");
    setDate("");
    setLocation("");
    setDescription("");
    setType("");
    Cacher();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre"
      />
      <input
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Lieu"
      />
      <textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Atelier">Atelier</option>
        <option value="Conference">Conference</option>
        <option value="Personnel">Personnel</option>
        <option value="Autre">Autre</option>
      </select>

      <button type="submit">Enregistrer</button>
    </form>
  );
}

export default AddEvent;