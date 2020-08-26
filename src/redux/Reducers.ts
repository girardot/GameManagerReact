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
  action: ConsolesAction | GamesAction
) => {
  const newConsoles = [...consoles];
  console.log("consolesReducer" + action.type);
  const consoleAction: ConsolesAction = action;
  const gameAction: GamesAction = action;

  switch (action.type) {
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
    case "ADD_GAME":
      const consoleType = newConsoles.find(
        (console: ConsoleType) => console.id === gameAction.consoleId
      );
      const newGame: GameType = {
        id: nextId(),
        name: gameAction.name,
        progress: 0,
        isDemate: false,
        toDoOrder: 0
      };
      if (consoleType) {
        consoleType.games.push(newGame);
      }
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
      return consoles;
  }
  return newConsoles;
};

export const Reducers = combineReducers({ consolesReducer });
