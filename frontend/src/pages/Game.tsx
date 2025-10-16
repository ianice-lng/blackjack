import { useParams} from 'react-router-dom';
import { useState } from 'react';
import type {Game} from '../types/'
import ListPlayers from '../components/ListPlayers';
import SelectList from '../components/SelectList';
import ListWinner from '../components/ListWinner';
const game: Game = {"id": 24, 
  "name": "partie jspcbm", 
  "turn": 4, 
  "ended": false, 
  "players": [{
    "name": "test1", 
    "score": 20, 
    "stand": false
  }, {
    "name": "test2", 
    "score": 7, 
    "stand": false
  }, {
    "name": "test3", 
    "score": 7, 
    "stand": false
  }], 
  "winners": [{
    "name": "test1", 
    "score": 20, 
    "stand": false
  }], 
  "current_players": [{
    "name": "test1", 
    "score": 20, 
    "stand": false
  }]
};


export default function Game() {
  const { id } = useParams<{ id: string }>();
  const [numberDice, setNumberDice] = useState<number>(1);
  const handlePlay = () => {
    console.log("Play, numberDice:", numberDice);
  };
  return (
    <div className="App">
      <h1>Game {game.name}</h1>
      <h2>Au tour de {game.current_players[0].name}</h2>
      <SelectList setNumberDice={setNumberDice} />
      <button onClick={handlePlay}>Lancer</button>
      <h2>Players:</h2>
      <ListPlayers listPlayers={game.players} />

      <h2>Winners:</h2>
      <ListWinner listWinner={game.winners} />
    </div>
  ) 
}