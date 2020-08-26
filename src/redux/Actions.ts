export type Action = { type: string; id?: number };

export type ConsolesAction = Action & { name?: string };
export type GamesAction = Action & {
  consoleId?: number;
  name?: string;
  isDemate?: boolean;
  progress?: number;
};

const removeConsole = (consoleId: number): ConsolesAction => {
  return {
    type: "REMOVE_CONSOLE",
    id: consoleId
  };
};

const addNewConsole = (newConsoleName: string): ConsolesAction => {
  return {
    type: "ADD_CONSOLE",
    name: newConsoleName
  };
};

const addNewGame = (consoleId: number, newGameName: string): GamesAction => {
  return {
    type: "ADD_GAME",
    consoleId: consoleId,
    name: newGameName
  };
};

const removeGame = (consoleId: number, gameId: number): GamesAction => {
  return {
    type: "REMOVE_GAME",
    consoleId: consoleId,
    id: gameId
  };
};

const changeGameDemate = (gameId: number, isDemate: boolean): GamesAction => {
  return {
    type: "CHANGE_GAME_DEMATE",
    id: gameId,
    isDemate: isDemate
  };
};

const changeGameProgress = (gameId: number, progress: number): GamesAction => {
  return {
    type: "CHANGE_GAME_PROGRESS",
    id: gameId,
    progress: progress
  };
};

export const Actions = {
  removeConsole: removeConsole,
  addNewConsole: addNewConsole,
  removeGame: removeGame,
  addNewGame: addNewGame,
  changeGameDemate: changeGameDemate,
  changeGameProgress: changeGameProgress
};
