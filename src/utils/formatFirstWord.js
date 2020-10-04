import React from 'react';

const formatFirstWord = (string, classNames) => {
  if (string.length > 1) {
    const stringWords = string.split(" ");
    const firstWord = stringWords[0];
    stringWords.shift();
    const stringWordsJoined = stringWords.join(" ");

    return (
      <h3>
        <span className={classNames}>{firstWord}</span> {stringWordsJoined}
      </h3>
    );
  }
  return;
};

export default formatFirstWord;
