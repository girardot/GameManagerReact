import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";

type NewGameViewProperties = {
  addNewGame: (newGameName: string) => void;
};

export const NewGameView = (props: NewGameViewProperties) => {
  const [newGameName, setNewGameName] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewGameName(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addNewGame(newGameName);
    setNewGameName("");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <TextField
        label="New Game"
        value={newGameName}
        onChange={(event) => handleChange(event)}
      />
      <IconButton type="submit">
        <AddCircleOutlineIcon color="secondary" />
      </IconButton>
    </form>
  );
};
