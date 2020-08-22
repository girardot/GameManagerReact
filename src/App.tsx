import {
  BottomNavigation,
  BottomNavigationAction,
  Box
} from "@material-ui/core";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import EuroIcon from "@material-ui/icons/Euro";
import ListIcon from "@material-ui/icons/List";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ConsoleType } from "./components/consoles/ConsoleType";
import ConsolesView from "./components/consoles/Consoles";
import { ToDoListView } from "./components/games/ToDoList";
import { ToBuyListView } from "./components/games/ToBuyList";
import { Reducers } from "./redux/Reducers";
import "./styles.css";
import { idGenerator } from "./components/utils/idGenerator";

// import { Dispatch as ReduxDispatch } from "redux";
const nextConsoleId = idGenerator(0);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E52521"
    },
    secondary: {
      main: "#049CD8"
    }
  }
});

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));
let store = createStore(Reducers);

export const App = () => {
  const [consoles, setConsoles] = React.useState([]);

  const menus = ["List", "Todo", "Tobuy"];
  const [menu, setMenu] = React.useState(menus.indexOf("List"));

  const handleDelete = (consoleId: number) => {
    console.log("Delete console" + consoleId);
    const index = consoles.findIndex(
      (console: ConsoleType) => console.id === consoleId
    );
    consoles.splice(index, 1);
    setConsoles([...consoles]);
  };

  const handleAddNewConsole = (consoleName: string) => {
    const consoleId = nextConsoleId();
    console.log(consoleId + consoleName);
    setConsoles([...consoles, { id: consoleId, name: consoleName }]);
  };

  const classes = styles();
  let menuView;

  switch (menus[menu]) {
    case "List":
      menuView = (
        <ConsolesView
          consoles={consoles}
          onDelete={handleDelete}
          addNewConsole={handleAddNewConsole}
        />
      );
      break;
    case "Todo":
      menuView = <ToDoListView />;
      break;
    case "Tobuy":
      menuView = <ToBuyListView />;
      break;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box component="div" m={1} className={classes.root}>
          <BottomNavigation
            value={menu}
            onChange={(event, newValue) => {
              console.log(newValue);
              setMenu(newValue);
            }}
            showLabels
          >
            <BottomNavigationAction label="List" icon={<ListIcon />} />
            <BottomNavigationAction label="Todo" icon={<CheckIcon />} />
            <BottomNavigationAction label="Tobuy" icon={<EuroIcon />} />
          </BottomNavigation>

          {menuView}
        </Box>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
