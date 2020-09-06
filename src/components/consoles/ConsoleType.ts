import { GameType } from "../games/GameType";

export type ConsoleType = {
  id: number;
  name: string;
  games: GameType[];
};
