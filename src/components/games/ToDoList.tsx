import List from "@material-ui/core/List";
import * as React from "react";
import { GameType } from "./Game";
import { ToDoView } from "./ToDo";

type ToDoListViewProperties = {};

export const ToDoListView = (props: ToDoListViewProperties) => {
  const [games, setGames] = React.useState([
    { id: 1, name: "TODO1", progress: 20, isDemate: false, toDoOrder: 1 },
    { id: 2, name: "TODO2", progress: 40, isDemate: false, toDoOrder: 2 },
    { id: 3, name: "TODO3", progress: 200, isDemate: false, toDoOrder: 3 }
  ]);

  const swap = (games: GameType[], index1: number, index2: number) => {
    const temp = games[index1];
    const tempTodoOrder = games[index1].toDoOrder;
    games[index1].toDoOrder = games[index2].toDoOrder;
    games[index1] = games[index2];
    games[index2].toDoOrder = tempTodoOrder;
    games[index2] = temp;
  };

  const moveUp = (gameId: number) => {
    const updatedGames = [...games];
    const index = updatedGames.findIndex(
      (game: GameType) => game.id === gameId
    );
    const previousIndex = index - 1;
    if (previousIndex >= 0) {
      swap(updatedGames, index, previousIndex);
      setGames(updatedGames);
    }
  };
  const moveDown = (gameId: number) => {
    const updatedGames = [...games];
    const index = updatedGames.findIndex(
      (game: GameType) => game.id === gameId
    );
    const nextIndex = index + 1;
    if (nextIndex < updatedGames.length) {
      swap(updatedGames, index, nextIndex);
      setGames(updatedGames);
    }
  };

  const changeProgress = (gameId: number, progress: number) => {
    console.log("Change progress " + progress + " for game " + gameId);

    const updatedGames = [...games];
    const gameToUpdate = updatedGames.find(
      (game: GameType) => game.id === gameId
    );
    gameToUpdate.progress = progress;
    setGames(updatedGames);
  };
  return (
    <div>
      <List component="div" disablePadding>
        {games.map((game: GameType) => (
          <ToDoView
            game={game}
            changeProgress={changeProgress}
            moveDown={() => moveDown(game.id)}
            moveUp={() => moveUp(game.id)}
          />
        ))}
      </List>
    </div>
  );
};
