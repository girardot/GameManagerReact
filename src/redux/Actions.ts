export type ConsolesAction = { type: string; id: number; name?: string };

const removeConsole = (consoleId: number): ConsolesAction => {
  return {
    type: "REMOVE_CONSOLE",
    id: consoleId
  };
};

const addNewConsole = (newConsoleName: string): ConsolesAction => {
  return {
    type: "ADD_CONSOLE",
    id: 36, //TODO
    name: newConsoleName
  };
};

export const Actions = {
  removeConsole: removeConsole,
  addNewConsole: addNewConsole
};
