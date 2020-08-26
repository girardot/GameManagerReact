import { ConsoleType } from "../components/consoles/ConsoleType";
import { GameType } from "../games/Game";
import { combineReducers } from "redux";
import { Action, ConsolesAction, GamesAction } from "./Actions";

import { idGenerator } from "../components/utils/idGenerator";

const nextId = idGenerator(4);

const defaultConsoles: ConsoleType[] = [
  { id: nextId(), name: "rc1", games: [] },
  { id: nextId(), name: "rc2", games: [] },
  { id: nextId(), name: "rc3", games: [] },
  { id: nextId(), name: "rc4", games: [] }
];

const consolesReducer = (
  consoles: ConsoleType[] = defaultConsoles,
  consoleAction: ConsolesAction
) => {
  const newConsoles = [...consoles];
  console.log("consolesReducer" + consoleAction.type);

  switch (consoleAction.type) {
    case "REMOVE_CONSOLE":
      const index = newConsoles.findIndex(
        (console: ConsoleType) => console.id === consoleAction.id
      );
      newConsoles.splice(index, 1);
      break;
    case "ADD_CONSOLE":
      const newConsole: ConsoleType = {
        id: nextId(),
        name: consoleAction.name ? consoleAction.name : "",
        games: []
      };
      newConsoles.push(newConsole);
      break;
    default:
      return consoles;
  }
  return newConsoles;
};

const defaultConsole: ConsoleType = {
  id: nextId(),
  name: "default c",
  games: []
};

const gamesReducer = (
  consoleState: ConsoleType = defaultConsole,
  gameAction: GamesAction
) => {
  const newConsole = { ...consoleState };
  console.log("gamesReducer" + gameAction.type);
  console.log(gameAction);

  switch (gameAction.type) {
    case "ADD_GAME":
      const newGame: GameType = {
        id: nextId(),
        name: gameAction.name,
        progress: 0,
        isDemate: false,
        toDoOrder: 0
      };
      newConsole.games.push(newGame);
      break;
    case "REMOVE_GAME":
      //TODO
      break;
    case "CHANGE_GAME_DEMATE":
      //TODO
      break;
    case "CHANGE_GAME_PROGRESS":
      // TODO
      break;
    default:
      return consoleState;
  }
  return newConsole;
};

export const Reducers = combineReducers({ consolesReducer, gamesReducer });
