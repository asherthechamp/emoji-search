import React from "react";
import Emoji from "./Emoji";

function SearchResut(props) {
  const emoji = props.result;
  return (
    <>
      <div className="search-result">
        <Emoji className="emoji-comp" emoji={emoji} />
      </div>
    </>
  );
}

export default SearchResut;
