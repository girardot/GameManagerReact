import { ConsoleType } from "../components/consoles/ConsoleType";
import { combineReducers } from "redux";
import { ConsolesAction } from "./Actions";

import { idGenerator } from "../components/utils/idGenerator";

const nextConsoleId = idGenerator(0);

const defaultConsoles: ConsoleType[] = [
  { id: nextConsoleId(), name: "rc1" },
  { id: nextConsoleId(), name: "rc2" },
  { id: nextConsoleId(), name: "rc3" },
  { id: nextConsoleId(), name: "rc4" }
];
const consolesReducer = (
  consoles: ConsoleType[] = defaultConsoles,
  action: ConsolesAction
) => {
  const newConsoles = [...consoles];
  console.log("consolesReducer" + action.type);
  console.log(consoles);
  switch (action.type) {
    case "REMOVE_CONSOLE":
      const consoleId = action.id;
      const index = newConsoles.findIndex(
        (console: ConsoleType) => console.id === consoleId
      );
      newConsoles.splice(index, 1);
      break;
    case "ADD_CONSOLE":
      newConsoles.push({ id: action.id, name: action.name ? action.name : "" });
      break;

    default:
      return consoles;
  }
  return newConsoles;
};

export const Reducers = combineReducers({ consolesReducer });
