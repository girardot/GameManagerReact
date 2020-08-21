import { ConsoleType } from "../components/consoles/Console2";
import { combineReducers } from "redux";
import { ConsolesAction } from "./Actions";

const consolesReducer = (consoles: ConsoleType[], action: ConsolesAction) => {
  const newConsoles = { ...consoles };
  console.log("consolesReducer" + action.type);
  switch (action.type) {
    case "REMOVE_CONSOLE":
      const consoleId = action.id;
      const index = newConsoles.findIndex(
        (console: ConsoleType) => console.id === consoleId
      );
      newConsoles.splice(index, 1);
      break;
    default:
      return consoles;
  }
  return newConsoles;
};

export const Reducers = () => combineReducers({ consolesReducer });
