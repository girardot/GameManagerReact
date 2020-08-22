import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import React from "react";
import { GameType } from "../games/Game";
import { GamesView } from "../games/Games";
import Collapse from "@material-ui/core/Collapse";

type ConsoleViewProperties = {
  id: number;
  name: string;
  onDelete: () => void;
  nextGameId: () => number;
};

export const ConsoleView = (props: ConsoleViewProperties) => {
  const defaultGames: GameType[] = [
    {
      id: props.nextGameId(),
      name: "G1",
      isDemate: true,
      progress: 20,
      toDoOrder: 5
    },
    {
      id: props.nextGameId(),
      name: "G2",
      isDemate: false,
      progress: 60,
      toDoOrder: 3
    }
  ];

  const [games, setGames] = React.useState(defaultGames);

  const addNewGame = (newGameName: string) => {
    setGames([
      ...games,
      {
        id: props.nextGameId(),
        name: newGameName,
        progress: 0,
        isDemate: false,
        toDoOrder: 0
      }
    ]);
  };

  const deleteGame = (gameId: number) => {
    console.log("Delete game " + gameId);
    const updatedGames = [...games];
    const index = updatedGames.findIndex(
      (game: GameType) => game.id === gameId
    );
    updatedGames.splice(index, 1);
    setGames(updatedGames);
  };

  const changeDemate = (gameId: number, isDemate: boolean) => {
    console.log("Change isDemate " + isDemate + " for game " + gameId);

    const updatedGames = [...games];
    const gameToUpdate: GameType | undefined = updatedGames.find(
      (game: GameType) => game.id === gameId
    );
    if (gameToUpdate) {
      gameToUpdate.isDemate = isDemate;
      setGames(updatedGames);
    }
  };

  const changeProgress = (gameId: number, progress: number) => {
    console.log("Change progress " + progress + " for game " + gameId);

    const updatedGames = [...games];
    const gameToUpdate: GameType | undefined = updatedGames.find(
      (game: GameType) => game.id === gameId
    );
    if (gameToUpdate) {
      gameToUpdate.progress = progress;
      setGames(updatedGames);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const onEdit = () => {
    //TODO
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <VideogameAssetIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary={props.name} />

        <IconButton onClick={() => onEdit()}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => props.onDelete()}>
          <DeleteIcon />
        </IconButton>

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <GamesView
          games={games}
          addNewGame={addNewGame}
          deleteGame={deleteGame}
          changeDemate={changeDemate}
          changeProgress={changeProgress}
        />
      </Collapse>
    </div>
  );
};
