import type { Player } from "./";

export interface Game {
  id: number;
  name: string;
  turn: number;
  ended: boolean;
  players: Player[];
  winners: Player[];
  current_players: Player[];
}

