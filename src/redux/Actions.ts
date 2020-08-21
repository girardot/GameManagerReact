export type ConsolesAction = { type: string; id: number; name?: string };

const removeConsole = (consoleId: number): ConsolesAction => {
  return {
    type: "REMOVE_CONSOLE",
    id: consoleId
  };
};

export const Actions = { removeConsole: removeConsole };
