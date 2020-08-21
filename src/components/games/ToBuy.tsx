import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import GameIcon from "@material-ui/icons/Games";
import * as React from "react";

export type ToBuyType = {
  id: number;
  name: string;
  order: number;
};

type ToBuyViewProperties = {
  toBuy: ToBuyType;
  toBuyListSize: number;
  deleteToBuy: (toBuyId: number) => void;
  moveUp: (toBuyId: number) => void;
  moveDown: (toBuyId: number) => void;
};

export const ToBuyView = (props: ToBuyViewProperties) => {
  const toBuy: ToBuyType = props.toBuy;

  const onEdit = () => {};

  return (
    <ListItem button>
      <ListItemIcon>
        <GameIcon color="secondary" />
      </ListItemIcon>

      <IconButton
        onClick={() => props.moveUp(toBuy.id)}
        // disabled={toBuy.order === 0}
      >
        <ArrowUpwardIcon />
      </IconButton>

      <IconButton
        onClick={() => props.moveDown(toBuy.id)}
        // disabled={toBuy.order === props.toBuyListSize - 1}
      >
        <ArrowDownwardIcon />
      </IconButton>

      <ListItemText primary={toBuy.name} />
      <IconButton onClick={() => onEdit()}>
        <EditIcon />
      </IconButton>

      <IconButton onClick={() => props.deleteToBuy(toBuy.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
