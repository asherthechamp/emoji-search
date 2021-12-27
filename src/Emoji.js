import React from "react";

function Emoji(props) {
  function myFunction() {
    var copyText = document.querySelector("#myEmoji");
    // copyText = copyText.querySelector("tooltiptext");
    copyText = copyText.innerHTML.toString().substring(0, 2);
    console.log(copyText);
    // copyText.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(copyText);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Text copied to clipboard.";
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Click the emoji to copy to clipboard.";
  }

  return (
    <div className="tooltip emoji">
      <div
        id="myEmoji"
        className="prop-char"
        onClick={() => myFunction()}
        onMouseOut={() => outFunc()}
      >
        {props.emoji.emoji}
        <h6 id="tooltiptxt" className="tooltiptext" id="myTooltip"></h6>
      </div>
    </div>
  );
}

export default Emoji;
