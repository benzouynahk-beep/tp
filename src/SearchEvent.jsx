function SearchEvent(props) {
    const {TriageType , TriageDate }=props
  return (
    <div>
      <select onChange={(e) => TriageType(e.target.value)}>
        <option value="">Tous</option>
        <option value="Atelier">Atelier</option>
        <option value="Conference">Conference</option>
        <option value="Personnel">Personnel</option>
        <option value="Autre">Autre</option>
      </select>

      <button onClick={TriageDate}>Trier par date</button>
    </div>
  );
}

export default SearchEvent;