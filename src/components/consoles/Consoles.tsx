import { ListSubheader } from "@material-ui/core";

import List from "@material-ui/core/List";
import * as React from "react";
import { idGenerator } from "../utils/idGenerator";
import { ConsoleType } from "./ConsoleType";
import { ConsoleView } from "./Console2";
import { NewConsoleView } from "./NewConsole";
import { GameFilterView } from "../games/GameFilter";
import { Actions } from "../../redux/Actions";
//import { useStore } from "react-redux";
import { connect } from "react-redux";

type ConsolesViewProperties = {
  consoles: ConsoleType[];
  onDelete: (consoleId: number) => void;
  addNewConsole: (consoleName: string) => void;
  dispatch?: Function;
};

const ConsolesView = (props: ConsolesViewProperties) => {
  const consoles = props.consoles;
  // TODO
  //const store = useStore();
  // const consoles: ConsoleType[] = store.getState();
  // console.log("store" + store.getState());
  const filterGames = (searchValue: string) => {
    console.log("filter " + searchValue);
  };
  const unfilter = () => {
    console.log("unfilter ");
  };

  const onDelete = (consoleId: number) => {
    console.log("onDelete " + consoleId);
    //store.dispatch(Actions.removeConsole(consoleId));
    if (props.dispatch) {
      console.log("ondelete dispatch");
      props.dispatch(Actions.removeConsole(consoleId));
    }
  };

  const nextGameId = idGenerator(0);
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
        {consoles.map((console: ConsoleType, index: number) => (
          <ConsoleView
            id={console.id}
            key={index}
            name={console.name}
            nextGameId={nextGameId}
            // onDelete={() => props.onDelete(console.id)}
            onDelete={() => onDelete(console.id)}
          />
        ))}
      </List>
      <NewConsoleView addNewConsole={props.addNewConsole} />
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

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

 connect(mapStateToProps, mapDispatchToProps)(TodoList)


*/

export default connect((state: any) => state)(ConsolesView);
