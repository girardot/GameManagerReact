import { ListSubheader } from "@material-ui/core";

import List from "@material-ui/core/List";
import * as React from "react";
import { ConsoleType } from "./ConsoleType";
import ConsoleView from "./Console2";
import { NewConsoleView } from "./NewConsole";
import { GameFilterView } from "../games/GameFilter";
import { Actions, ConsolesAction } from "../../redux/Actions";
import { connect } from "react-redux";

type ConsolesViewProperties = {
  consoles: ConsoleType[];
  addNewConsole?: (consoleName: string) => void;
  deleteConsole?: (consoleId: number) => void;
};

const ConsolesView = (props: ConsolesViewProperties) => {
  const consoles = props.consoles;
  // TODO
  const filterGames = (searchValue: string) => {
    console.log("filter " + searchValue);
  };
  const unfilter = () => {
    console.log("unfilter ");
  };

  const addNewConsole = (consoleName: string) => {
    if (props.addNewConsole) {
      props.addNewConsole(consoleName);
    }
  };

  const deleteConsole = (consoleId: number) => {
    if (props.deleteConsole) {
      props.deleteConsole(consoleId);
    }
  };

  return (
    <div>
      <GameFilterView filterGames={filterGames} unfilter={unfilter} />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Consoles and games
          </ListSubheader>
        }
      >
        {consoles.map
          ? consoles.map((console: ConsoleType, index: number) => (
              <ConsoleView
                id={console.id}
                key={index}
                name={console.name}
                console={console}
                onDelete={() => deleteConsole(console.id)}
              />
            ))
          : ""}
      </List>
      <NewConsoleView addNewConsole={addNewConsole} />
    </div>
  );
};
// TODO for filter

/*
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

 connect(mapStateToProps, mapDispatchToProps)(TodoList)

*/

const mapStateToProps = (consoles: any) => {
  console.log(mapStateToProps);
  console.log(consoles.consolesReducer);
  return {
    consoles: consoles.consolesReducer
  };
};
const mapDispatchToProps = (
  dispatch: (consolesAction: ConsolesAction) => void
) => {
  return {
    deleteConsole: (consoleId: number) => {
      dispatch(Actions.removeConsole(consoleId));
    },
    addNewConsole: (consoleName: string) => {
      dispatch(Actions.addNewConsole(consoleName));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConsolesView);
