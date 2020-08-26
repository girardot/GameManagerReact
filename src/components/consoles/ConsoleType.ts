import { GameType } from "../games/Game";

export type ConsoleType = {
  id: number;
  name: string;
  games: GameType[];
};
