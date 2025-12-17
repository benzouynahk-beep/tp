 export default function Header(props) {
    const { totalEv, nbrfavoris }=props
  return (
    <div>
      <h1>Event Planner</h1>
      <p>{totalEv} evenements . {nbrfavoris} Favoris ☆</p>

    </div>
  )
}

