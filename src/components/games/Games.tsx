import List from "@material-ui/core/List";
import * as React from "react";
import { GameType, GameView } from "./Game";
import { NewGameView } from "./NewGame";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
type GamesViewProperties = {
  games: GameType[];
  addNewGame: (newGameName: string) => void;
  deleteGame: (gameId: number) => void;
  changeProgress: (gameId: number, newProgress: number) => void;
  changeDemate: (gameId: number, demate: boolean) => void;
};

export const GamesView = (props: GamesViewProperties) => {
  const useStyles = makeStyles((theme) => ({
    nested: {
      paddingLeft: theme.spacing(4)
    }
  }));
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div>
      {" "}
      <List component="div" disablePadding>
        {props.games.map((game: GameType) => (
          <GameView
            game={game}
            deleteGame={props.deleteGame}
            changeProgress={props.changeProgress}
            changeDemate={props.changeDemate}
            classes={classes}
          />
        ))}
        <ListItem button className={classes.nested}>
          <NewGameView addNewGame={props.addNewGame} />
        </ListItem>
      </List>
    </div>
  );
};
