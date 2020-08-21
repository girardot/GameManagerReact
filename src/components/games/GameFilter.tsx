import * as React from "react";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

type GameFilterViewProperties = {
  filterGames: (searchValue: string) => void;
  unfilter: () => void;
};

export const GameFilterView = (props: GameFilterViewProperties) => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSearchValue = event.currentTarget.value;
    console.log("handleChange updatedSearchValue :" + updatedSearchValue);
    setSearchValue(updatedSearchValue);
    if (updatedSearchValue.length >= 3) {
      props.filterGames(searchValue);
    } else {
      props.unfilter();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.filterGames(searchValue);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <TextField
        label="Search"
        value={searchValue}
        onChange={(event) => handleChange(event)}
      />
      <IconButton type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};
