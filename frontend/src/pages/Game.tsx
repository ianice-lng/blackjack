import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import type {Game} from '../types/'
import ListPlayers from '../components/ListPlayers';
import SelectList from '../components/SelectList';
import ListWinner from '../components/ListWinner';
import useGame from '../hooks/useGame';
// const game: Game = {"id": 24, 
//   "name": "partie jspcbm", 
//   "turn": 4, 
//   "ended": false, 
//   "players": [{
//     "name": "test1", 
//     "score": 20, 
//     "stand": false
//   }, {
//     "name": "test2", 
//     "score": 7, 
//     "stand": false
//   }, {
//     "name": "test3", 
//     "score": 7, 
//     "stand": false
//   }], 
//   "winners": [{
//     "name": "test1", 
//     "score": 20, 
//     "stand": false
//   }], 
//   "current_players": [{
//     "name": "test1", 
//     "score": 20, 
//     "stand": false
//   }]
// };


export default function Game() {
  const { id } = useParams<{ id: string }>();
  const [numberDice, setNumberDice] = useState<number>(1);
  const { game, getGame, playGame } = useGame("play");

  useEffect(() => {
    if(!id) return;
    getGame(id);
    console.log(game?.ended)
    if(game?.ended) {
      alert("La partie est terminée !");
    }
  }, [id, getGame]);

  
  const handlePlay = (nbrDices: number, stand: boolean) => {
    playGame(nbrDices, stand);
  };

  if (!game) return <p>Chargement du jeu...</p>;
  return (
    <div className="App">
      {game.ended || game.current_players.length === 0 ? (
        <>
          <h2>La partie est terminée !</h2>
          <h2>Gagnants:</h2>
        </>
      ) : (
        <>
          <h1>Game {game.name}</h1>
          <h2>Au tour de {game?.current_players?.[0]?.name}</h2>
          <SelectList setNumberDice={setNumberDice} />
          <button onClick={() => handlePlay(numberDice, false)}>Lancer</button>
          <button onClick={() => handlePlay(0, true)}>Stand</button>
          <h2>Joueurs score:</h2>
          <ListPlayers listPlayers={game.players} />
          <h2>Gagnants actuels:</h2>
        </>
      )}
      <ListWinner listWinner={game.winners} />
    </div>
  ) 
}