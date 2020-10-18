import React from "react";
import classnames from "classnames";

import { LanguageContext } from 'components/LanguageContext'
import "styles/common.css";

const EnglishLanguageButton = () => {
  const { language, setLanguage} = React.useContext(LanguageContext);
  return (
    <button
      className={classnames("languageButton", {
        languageButtonActive: language.language === "english",
      })}
      onClick={() =>{
        setLanguage({type: 'set', payload: 'english'});
      }}
    >
      En<span>.</span>
    </button>
  );
};

export default EnglishLanguageButton;
