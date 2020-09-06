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
      {
        let consoleToUpdate = newConsoles.find(
          (console: ConsoleType) => console.id === gameAction.consoleId
        );
        const newGame: GameType = {
          id: nextId(),
          name: gameAction.name,
          progress: 0,
          isDemate: false,
          toDoOrder: 0
        };
        if (consoleToUpdate) {
          consoleToUpdate.games.push(newGame);
        }
      }

      break;
    case "REMOVE_GAME":
      {
        let consoleToUpdate = newConsoles.find(
          (console: ConsoleType) => console.id === gameAction.consoleId
        );

        if (consoleToUpdate) {
          const gameIndexToRemove = consoleToUpdate.games.findIndex(
            (game: GameType) => game.id === gameAction.id
          );
          if (gameIndexToRemove) {
            consoleToUpdate.games.splice(gameIndexToRemove, 1);
          }
        }
      }

      break;
    case "CHANGE_GAME_DEMATE":
      {
        let consoleToUpdate = newConsoles.find(
          (console: ConsoleType) => console.id === gameAction.consoleId
        );
        if (consoleToUpdate) {
          let gameToUpdate = consoleToUpdate.games.find(
            (game: GameType) => game.id === gameAction.id
          );

          if (gameToUpdate && gameAction.isDemate !== undefined) {
            gameToUpdate.isDemate = gameAction.isDemate;
          }
        }
      }
      break;
    case "CHANGE_GAME_PROGRESS":
      {
        let consoleToUpdate = newConsoles.find(
          (console: ConsoleType) => console.id === gameAction.consoleId
        );
        if (consoleToUpdate) {
          let gameToUpdate = consoleToUpdate.games.find(
            (game: GameType) => game.id === gameAction.id
          );

          if (gameToUpdate && gameAction.progress !== undefined) {
            gameToUpdate.progress = gameAction.progress;
          }
        }
      }
      break;
    default:
      return consoles;
  }
  return newConsoles;
};

export const Reducers = combineReducers({ consolesReducer });
