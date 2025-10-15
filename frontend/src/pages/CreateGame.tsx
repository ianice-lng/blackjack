import { useState } from "react"
import AddPlayers from "../components/AddPlayers";

export default function CreateGame() {
  const [nameGame, setNameGame] = useState("")
  const [players, setPlayers] = useState<string[]>([])
  const handleStartGame = () => {
    if(nameGame && nameGame != ""){

      console.log("Game created with name:", nameGame);
      console.log("Players:", players);
      window.location.href = `/game/${nameGame}`;
    }
  }
  return (
    <div className="App">
      <h1>Create Game</h1>
      <input 
        type="text"
        placeholder="Le nom de la partie" 
        value={nameGame} 
        onChange={(e) => setNameGame(e.target.value)} 
      />
      <AddPlayers 
      players={players} 
      setPlayers={setPlayers} />
      <button  onClick={handleStartGame}>Créer</button>
    </div>
  ) 
}