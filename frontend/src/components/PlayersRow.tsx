import type { Player } from "../types";

export default function PlayerRow({ player }: { player: Player }) {
  return (
      <li> {player.name} - Score: {player.score} {player.stand ? "(Stand)" : ""}</li>
  );
}
