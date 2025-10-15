import type { Player } from "../types";

export default function ListPlayers({ listPlayers }: { listPlayers: Player[] }) {
  return (
    <ul>
      {listPlayers.map((player, index) => (
        <li key={index}> {player.name} - Score: {player.score} {player.stand ? "(Stand)" : ""}</li>
      ))}
    </ul>
  );
}
