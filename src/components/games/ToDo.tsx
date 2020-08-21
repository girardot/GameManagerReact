import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Slider from "@material-ui/core/Slider";
import GameIcon from "@material-ui/icons/Games";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import * as React from "react";

export type GameType = {
  id: number;
  name: string;
  progress: number;
  isDemate: boolean;
  toDoOrder: number;
};

type ToDoViewProperties = {
  game: GameType;
  changeProgress: (gameId: number, progress: number) => void;
  moveUp: (gameId: number) => void;
  moveDown: (gameId: number) => void;
};

export const ToDoView = (props: ToDoViewProperties) => {
  const game: GameType = props.game;

  const handleChangeProgress = (
    event: React.ChangeEvent,
    newProgress: number
  ) => {
    props.changeProgress(game.id, newProgress);
  };

  const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4)
    }
  }));
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ListItem button className={classes.nested}>
      <ListItemIcon>
        <GameIcon color="secondary" />
      </ListItemIcon>
      {game.toDoOrder}

      <IconButton onClick={() => props.moveUp(game.id)}>
        <ArrowUpwardIcon />
      </IconButton>

      <IconButton onClick={() => props.moveDown(game.id)}>
        <ArrowDownwardIcon />
      </IconButton>
      <ListItemText primary={game.name} />

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
    </ListItem>
  );
};
