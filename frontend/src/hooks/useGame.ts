import { useState, useCallback } from "react";
import { api } from "../services/api";
import type { Game } from "../types";

export default function useGame(endpoint: string) {
  const [game, setGame] = useState<Game>();
  const [loading, setLoading] = useState(false);

  const createGame = useCallback(async (name: string, players: string[]) => {
    setLoading(true);
    const data = await api.post(endpoint, { name, players });
    setGame(data);
    setLoading(false);
    return data;
  }, [endpoint]);


  const getGame = useCallback(async (id: string) => {
    setLoading(true);
    const data = await api.get(`${id}`);
    setGame(data);
    setLoading(false);
    return data;
  }, [endpoint]);

  const playGame = useCallback(async (dices: number, stand: boolean) => {
    if(!game) return
    const data = await api.post(`${endpoint}/${game.id}`, { dices, stand });
    setGame(data)
  }, [endpoint, game])
  
  return { game, loading, createGame, getGame, playGame };
}
