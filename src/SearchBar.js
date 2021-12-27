import React from "react";

function SearchBar(props) {
  return (
    <div className="input-div">
      <input
        onChange={(e) => props.handleSearch(e.target.value)}
        autoComplete="true"
        autoFocus={true}
        placeholder="type something such as heart ..."
      />
    </div>
  );
}

export default SearchBar;
