import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";

type NewToBuyViewProperties = {
  addNewToBuy: (toBuyName: string) => void;
};

export const NewToBuyView = (props: NewToBuyViewProperties) => {
  const [newToBuyName, setNewToBuyName] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewToBuyName(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addNewToBuy(newToBuyName);
    setNewToBuyName("");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <TextField
        label="New To Buy"
        value={newToBuyName}
        onChange={(event) => handleChange(event)}
      />
      <IconButton type="submit">
        <AddCircleOutlineIcon color="secondary" />
      </IconButton>
    </form>
  );
};
