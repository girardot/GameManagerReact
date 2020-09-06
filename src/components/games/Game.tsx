import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Slider from "@material-ui/core/Slider";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import GameIcon from "@material-ui/icons/Games";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import { GameType } from "../games/GameType";
import * as React from "react";

type GameViewProperties = {
  game: GameType;
  deleteGame: (gameId: number) => void;
  changeProgress: (gameId: number, newProgress: number) => void;
  changeDemate: (gameId: number, demate: boolean) => void;
  classes: any;
};

export const GameView = (props: GameViewProperties) => {
  const game: GameType = props.game;
  const demate: boolean = game.isDemate;
  const handleChangeProgress = (
    event: React.ChangeEvent,
    newProgress: number
  ) => {
    props.changeProgress(game.id, newProgress);
  };

  const onEdit = (_gameId: number) => {
    //TODO
  };

  const toogleDemate = (gameId: number) => {
    props.changeDemate(gameId, !demate);
  };

  return (
    <ListItem button className={props.classes.nested}>
      <ListItemIcon>
        <GameIcon color="secondary" />
      </ListItemIcon>
      <ListItemText primary={game.name} />

      <IconButton onClick={() => onEdit(game.id)}>
        <EditIcon />
      </IconButton>
      <Slider
        onChange={handleChangeProgress}
        defaultValue={0}
        value={game.progress}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        marks
        step={20}
        min={0}
        max={100}
      />

      <IconButton onClick={() => toogleDemate(game.id)}>
        <CloudQueueIcon color={demate ? "primary" : "disabled"} />
      </IconButton>

      <IconButton onClick={() => props.deleteGame(game.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
