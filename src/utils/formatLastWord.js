import React from "react";

const formatLastWord = (string, classNames) => {
  if (string.length > 1) {
    const stringWords = string.split(" ");
    const lastWord = stringWords.slice(-1)[0];

    if (!stringWords) {
      return;
    }

    if (stringWords.length < 2) {
      return (
        <h3 className="redText">
          {lastWord}
          <span class="blackText">.</span>
        </h3>
      );
    }

    stringWords.pop();
    const stringWordsJoined = stringWords.join(" ");
    return (
      <h3 className="blackText">
        {stringWordsJoined} <span className={classNames}>{lastWord}</span>
      </h3>
    );
  }
};

export default formatLastWord;
