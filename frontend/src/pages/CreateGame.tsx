import { useState } from "react"
import AddPlayers from "../components/AddPlayers";
import useGame from "../hooks/useGame";
import { useNavigate } from "react-router-dom";

export default function CreateGame() {
  const navigate = useNavigate();
  const [nameGame, setNameGame] = useState("")
  const [players, setPlayers] = useState<string[]>([])
  const { createGame } = useGame("start");

  const handleStartGame = () => {
    if(nameGame && nameGame != ""){
      console.log("Game created with name:", nameGame);
      console.log("Players:", players);
      createGame(nameGame, players).then((newGame) => {
        console.log("Created game:", newGame);
        navigate(`/game/${newGame.id}`);
    });
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