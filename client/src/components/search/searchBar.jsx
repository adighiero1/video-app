import React, { useState } from "react";
import {
  FormControl,
  InputBase,
  InputAdornment,
  Box,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ appBarHeight }) => {
  const [searching, setSearching] = useState("");

  const handleSearchButton = (e) => console.log("Searching for", searching);

  return (
    <Box
      component="form"
      sx={{
        border: "1px solid black",
        borderRadius: "25px",
        padding: 1,
        width: "60%",
      }}
    >
      <FormControl
        fullWidth
        sx={{
          height: `calc(100% - ${appBarHeight})`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <InputBase
          id="adornment-search"
          placeholder="Search"
          value={searching}
          aria-label="search-bar"
          onChange={(e) => setSearching(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="button" onClick={handleSearchButton}>
                <SearchIcon sx={{ mr: 1 }} aria-label="search" />
              </IconButton>
            </InputAdornment>
          }
          sx={{ marginLeft: 2.5 }}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
