import type { Player } from "../types";

export default function ListWinner({ listWinner }: { listWinner: Player[] }) {
  return (
    <ul>
      {listWinner.map((player, index) => (
        <li key={index}> {player.name} - Score: {player.score} {player.stand ? "(Stand)" : ""}</li>
      ))}
    </ul>
  );
}