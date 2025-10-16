import { useState } from "react"
import type { AddPlayersProps } from "../types/AddPlayerProps"


export default function AddPlayers({ players, setPlayers }: AddPlayersProps) {
  const [newPlayer, setNewPlayer] = useState("")

  const handleAddPlayer = () => {
    if (newPlayer) {
        if(!players.includes(newPlayer)) {
            setPlayers([...players, newPlayer])
            setNewPlayer("")
        }
    }
  }
  const handleDeletePlayer = (indexPlayerToDelete: number) => {
    players.splice(indexPlayerToDelete, 1)
    setPlayers([...players])
  }

  return (
    <div>
        {players.map((player, index) => (
          <div key={index}>{player} <button onClick={() => handleDeletePlayer(index)}>❌</button></div>
        ))}
      <input
        type="text"
        placeholder="Nom du joueur"
        value={newPlayer}
        onChange={(e) => setNewPlayer(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') handleAddPlayer() }}
      />
      <button onClick={handleAddPlayer}>Ajouter</button>
    </div>
  )
}