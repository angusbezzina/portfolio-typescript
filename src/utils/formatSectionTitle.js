import React from "react";

const formatSectionTitle = (string, classNames, classNamesAlternate) => {
  const stringLength = string.length;
  const words = string.split(" ");
  const numberOfWords = words.length;

  if(stringLength > 2) {
    if (numberOfWords === 1) {
      const middle =
        stringLength % 2 === 0
          ? stringLength / 2 - 1
          : stringLength / 2;
      let titleParts = [];
      titleParts.push(string.substring(0, middle), string.substring(middle));

      return (
        <h2 className={classNames}>
          {titleParts[0]}
          <br />
          {titleParts[1]}<span className={classNamesAlternate}>.</span>
        </h2>
      );
    }

    if(numberOfWords > 1) {
      const middle = numberOfWords / 2;
      const first = words.slice(0, middle);
      const second = words.slice(middle);
      const partOne = first.join(' ');
      const partTwo = second.join(' ');


      return (
        <h2 className={classNames}>
          {partOne}
          <br />
          {partTwo}
          <span className={classNamesAlternate}>.</span>
        </h2>
      );
    }
  }

    return (
      <h2 className={classNames}>
        {string}<span className={classNamesAlternate}>.</span>
      </h2>
    );
  };

export default formatSectionTitle;
