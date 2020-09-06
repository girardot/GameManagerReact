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
import { connect } from "react-redux";
import { ConsoleType } from "./ConsoleType";
import { Actions, GamesAction } from "../../redux/Actions";

type ConsoleViewProperties = {
  id: number;
  name: string;
  onDelete: () => void;
  console: ConsoleType;
  removeGame?: (consoleId: number, gameId: number) => void;
  addNewGame?: (consoleId: number, newGameName: string) => void;
  changeGameDemate?: (
    consoleId: number,
    gameId: number,
    isDemate: boolean
  ) => void;
  changeGameProgress?: (
    consoleId: number,
    gameId: number,
    progress: number
  ) => void;
};

const ConsoleView = (props: ConsoleViewProperties) => {
  let consoleState: ConsoleType;
  let games: GameType[] = [];
  if (props.console.id === props.id) {
    consoleState = props.console;
    games = consoleState && consoleState.games ? props.console.games : [];
  }

  const addNewGame = (newGameName: string) => {
    if (props.addNewGame && consoleState) {
      props.addNewGame(consoleState.id, newGameName);
    }
  };

  const deleteGame = (gameId: number) => {
    if (props.removeGame && consoleState) {
      props.removeGame(consoleState.id, gameId);
    }
  };

  const changeDemate = (gameId: number, isDemate: boolean) => {
    if (props.changeGameDemate && consoleState) {
      props.changeGameDemate(consoleState.id, gameId, isDemate);
    }
  };

  const changeProgress = (gameId: number, progress: number) => {
    if (props.changeGameProgress && consoleState) {
      props.changeGameProgress(consoleState.id, gameId, progress);
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

const mapStateToProps = (consoles: any) => {
  console.log(mapStateToProps);
  console.log(consoles.consolesReducer);
  return {
    consoles: consoles.consolesReducer
  };
};

const mapDispatchToProps = (dispatch: (gamesAction: GamesAction) => void) => {
  return {
    removeGame: (consoleId: number, gameId: number) => {
      dispatch(Actions.removeGame(consoleId, gameId));
    },
    addNewGame: (consoleId: number, newGameName: string) => {
      dispatch(Actions.addNewGame(consoleId, newGameName));
    },
    changeGameDemate: (
      consoleId: number,
      gameId: number,
      isDemate: boolean
    ) => {
      dispatch(Actions.changeGameDemate(consoleId, gameId, isDemate));
    },
    changeGameProgress: (
      consoleId: number,
      gameId: number,
      progress: number
    ) => {
      dispatch(Actions.changeGameProgress(consoleId, gameId, progress));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleView);
