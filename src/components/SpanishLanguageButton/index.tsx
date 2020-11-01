import React from "react";
import classnames from 'classnames';

import { LanguageContext } from "components/LanguageContext";

import 'styles/common.css';

const SpanishLanguageButton = () => {
  const { state, setLanguage} = React.useContext(LanguageContext);
  return (
    <button
      className={classnames("languageButton", {
        languageButtonActive: state.language === "spanish",
      })}
      onClick={() =>{
        setLanguage('spanish');
      }}
    >
      Es<span>.</span>
    </button>
  );
};

export default SpanishLanguageButton;
