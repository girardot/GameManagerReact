import * as React from "react";
import List from "@material-ui/core/List";
import { ListSubheader } from "@material-ui/core";
import { ToBuyType, ToBuyView } from "./ToBuy";
import { NewToBuyView } from "./NewToBuy";

export const ToBuyListView = () => {
  const [toBuyList, setToBuyList] = React.useState([
    { id: 1, name: "TB1", order: 0 },
    { id: 2, name: "TB2", order: 1 },
    { id: 3, name: "TB3", order: 2 }
  ]);

  const deleteToBuy = (toBuyId: number) => {
    const updatedToBuyList = [...toBuyList];
    const index = updatedToBuyList.findIndex(
      (toBuy: ToBuyType) => toBuy.id === toBuyId
    );
    updatedToBuyList.splice(index, 1);
    setToBuyList(updatedToBuyList);
  };

  const swap = (toBuyList: ToBuyType[], index1: number, index2: number) => {
    const temp: ToBuyType = toBuyList[index1];
    const tempOrder = toBuyList[index1].order;
    toBuyList[index1].order = toBuyList[index2].order;
    toBuyList[index1] = toBuyList[index2];
    toBuyList[index2].order = tempOrder;
    toBuyList[index2] = temp;
  };

  const moveUp = (toBuyId: number) => {
    const updatedToBuyList = [...toBuyList];
    const index = updatedToBuyList.findIndex(
      (toBuy: ToBuyType) => toBuy.id === toBuyId
    );
    const previousIndex = index - 1;
    if (previousIndex >= 0) {
      swap(updatedToBuyList, index, previousIndex);
      setToBuyList(updatedToBuyList);
    }
  };
  const moveDown = (toBuyId: number) => {
    const updatedToBuyList = [...toBuyList];
    const index = updatedToBuyList.findIndex(
      (toBuy: ToBuyType) => toBuy.id === toBuyId
    );
    const nextIndex = index + 1;
    if (nextIndex < updatedToBuyList.length) {
      swap(updatedToBuyList, index, nextIndex);
      setToBuyList(updatedToBuyList);
    }
  };

  const addNewToBuy = (toBuyName: string) => {
    const newId = new Date().getTime();
    setToBuyList([
      ...toBuyList,
      { id: newId, name: toBuyName, order: toBuyList.length }
    ]);
  };

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            To Buy
          </ListSubheader>
        }
      >
        {toBuyList.map((toBuy: ToBuyType) => (
          <ToBuyView
            toBuy={toBuy}
            toBuyListSize={toBuyList.length}
            deleteToBuy={() => deleteToBuy(toBuy.id)}
            moveDown={() => moveDown(toBuy.id)}
            moveUp={() => moveUp(toBuy.id)}
          />
        ))}
      </List>
      <NewToBuyView addNewToBuy={addNewToBuy} />
    </div>
  );
};
