import type { Player } from "../types";
import PlayerRow from "./PlayersRow";
export default function ListWinner({ listWinner }: { listWinner: Player[] }) {
  return (
    <ul>
      {listWinner?.map((player, index) => (
        <PlayerRow key={index} player={player} />
      ))}
    </ul>
  );
}