import React from "react";
import classnames from "classnames";

import { LanguageContext } from 'components/LanguageContext'
import "styles/common.css";

const EnglishLanguageButton = () => {
  const { state, setLanguage} = React.useContext(LanguageContext);
  const isActive = state.language === "english";
  return (
    <button
      className={classnames("languageButton", {
        languageButtonActive: isActive,
      })}
      onClick={() => {
        setLanguage("english");
        localStorage.setItem("user_language", "english");
      }}
      data-testid="english-language-button"
    >
      En<span>.</span>
    </button>
  );
};

export default EnglishLanguageButton;
