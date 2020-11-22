import React from "react";
import classnames from 'classnames';

const formatFirstWord = (string: string, classNames: Array<string> | string) => {
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
          <span className="redText">.</span>
        </h3>
      );
    }

    stringWords.shift();
    const stringWordsJoined = stringWords.join(" ");
    return (
      <h3>
        <span className={classnames(classNames)}>{firstWord}</span> {stringWordsJoined}
        <span className="redText">.</span>
      </h3>
    );
  }
};

export default formatFirstWord;
