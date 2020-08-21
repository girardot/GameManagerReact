import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";

type NewConsoleViewProperties = {
  addNewConsole: (consoleName: string) => void;
};

export const NewConsoleView = (props: NewConsoleViewProperties) => {
  const [newConsoleName, setNewConsoleName] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewConsoleName(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addNewConsole(newConsoleName);
    setNewConsoleName("");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <TextField
        label="New Console"
        value={newConsoleName}
        onChange={(event) => handleChange(event)}
      />{" "}
      <IconButton type="submit">
        <AddCircleOutlineIcon color="primary" />
      </IconButton>
    </form>
  );
};
