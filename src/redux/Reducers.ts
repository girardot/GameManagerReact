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
  state: any = defaultConsoles,
  action: ConsolesAction
) => {
  console.log("consolesReducer" + state);

  /*  const newConsoles = { ...consoles };
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
  return newConsoles;*/
  return state;
};

export const Reducers = combineReducers({ consolesReducer });
