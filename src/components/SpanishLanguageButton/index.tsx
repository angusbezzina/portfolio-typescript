import React from "react";
import classnames from 'classnames';

import { LanguageContext } from "components/LanguageContext";

import 'styles/common.css';

const SpanishLanguageButton = () => {
  const { language, setLanguage} = React.useContext(LanguageContext);
  return (
    <button
      className={classnames("languageButton", {
        languageButtonActive: language.language === "spanish",
      })}
      onClick={() =>{
        setLanguage({type: 'set', payload: 'spanish'});
      }}
    >
      Es<span>.</span>
    </button>
  );
};

export default SpanishLanguageButton;
