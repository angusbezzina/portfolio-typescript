import React from "react";
import classnames from 'classnames';

import { LanguageContext } from "components/LanguageContext";

import 'styles/common.css';

const SpanishLanguageButton = () => {
  const { state, setLanguage} = React.useContext(LanguageContext);
  const isActive = state.language === "spanish";

  return (
    <button
      className={classnames("languageButton", {
        "languageButtonActive": isActive,
      })}
      onClick={() =>{
        setLanguage('spanish');
      }}
      data-testid="spanish-language-button"
    >
      Es<span>.</span>
    </button>
  );
};

export default SpanishLanguageButton;
