import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { EmojiService } from "m3o/emoji";

function EmojiSearch() {
  const [emojiResult, setEmojiResult] = useState({ emoji: "🟪" });

  async function getResults(s) {
    const emojiService = new EmojiService(
      "NTNiOTBhZWItYmQ5OC00NTYzLTg5ZGUtMDk2YzBjMjI1ZTA5"
    );
    const rsp = await emojiService.find({
      alias: ":" + s + ":",
    });
    setEmojiResult(rsp);
  }

  return (
    <div className="container">
      <SearchBar handleSearch={(s) => getResults(s)} />
      <SearchResult result={emojiResult} />
    </div>
  );
}

export default EmojiSearch;
