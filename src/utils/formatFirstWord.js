import React from "react";

const formatFirstWord = (string, classNames) => {
  if (string.length > 1) {
    const stringWords = string.split(" ");
    const firstWord = stringWords[0];

    if (!stringWords) {
      return;
    }

    if (stringWords.length < 2) {
      return (
        <h3>
          {firstWord}
          <span class="redText">.</span>
        </h3>
      );
    }

    stringWords.shift();
    const stringWordsJoined = stringWords.join(" ");
    return (
      <h3>
        <span className={classNames}>{firstWord}</span> {stringWordsJoined}
        <span className="redText">.</span>
      </h3>
    );
  }
};

export default formatFirstWord;
