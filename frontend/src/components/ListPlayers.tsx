import type { Player } from "../types";
import PlayerRow from "./PlayersRow";

export default function ListPlayers({ listPlayers }: { listPlayers: Player[] }) {
  return (
    <ul>
      {listPlayers?.map((player, index) => (
        <PlayerRow key={index} player={player} />
      ))}
    </ul>
  );
}
