import type {Game} from '../types/'

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


export default function CreateGame() {
  return (
    <div className="App">
      <h1>Game {game.name}</h1>
    </div>
  ) 
}